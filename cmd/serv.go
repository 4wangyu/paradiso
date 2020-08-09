package cmd

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net"
	"net/http"
	"os"
	"os/exec"
	"runtime"

	"github.com/spf13/cobra"
)

// File Type
type File struct {
	ID   int
	Name string
}

var db *sql.DB

// servCmd represents the serv command
var servCmd = &cobra.Command{
	Use:   "serv",
	Short: "Serve your media using the file generated by 'scan'.",
	Long:  `Serve your media using the file generated by 'scan'.`,
	Run: func(cmd *cobra.Command, args []string) {
		if len(args) > 0 && fileExists(args[0]) {
			serv(args[0])
		} else {
			fmt.Println("Please specify a media file.")
		}
	},
}

func init() {
	rootCmd.AddCommand(servCmd)
}

func serv(dbFile string) {
	var err error
	db, err = sql.Open("sqlite3", dbFile)
	check(err)
	defer db.Close()

	http.HandleFunc("/random", serveRandom)

	http.HandleFunc("/recent", serveRecent)

	http.HandleFunc("/videos", serveVideos)

	http.HandleFunc("/search", serveSearch)

	http.HandleFunc("/file", serveFile)

	http.Handle("/", http.FileServer(http.Dir("web/build")))

	// get free port
	// listener, err := net.Listen("tcp", ":0")
	listener, err := net.Listen("tcp", ":9000")
	check(err)
	url := fmt.Sprintf("%s:%d", "http://localhost", listener.Addr().(*net.TCPAddr).Port)

	fmt.Println("Serving at", url)
	openBrowser(url)

	err = http.Serve(listener, nil)
	if err != nil {
		fmt.Println(err.Error())
	}
}

func serveRandom(w http.ResponseWriter, r *http.Request) {
	row := db.QueryRow("SELECT id, name FROM media ORDER BY RANDOM() LIMIT 1")
	var file File
	err := row.Scan(&file.ID, &file.Name)
	check(err)

	data, err := json.Marshal(file)
	w.Header().Set("Content-Type", "application/json")
	w.Write(data)
}

func serveRecent(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "/Volumes/Seagate/Video/4 Star/Movie/America/1999，大开眼戒Eyes.Wide.Shut.1999.BD.MiniSD-TLF.mkv")
}

func serveVideos(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "/Volumes/Seagate/Video/4 Star/Movie/America/1999，大开眼戒Eyes.Wide.Shut.1999.BD.MiniSD-TLF.mkv")
}

func serveSearch(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "/Volumes/Seagate/Video/4 Star/Movie/America/1999，大开眼戒Eyes.Wide.Shut.1999.BD.MiniSD-TLF.mkv")
}

func serveFile(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "/Volumes/Seagate/Video/4 Star/Movie/America/1999，大开眼戒Eyes.Wide.Shut.1999.BD.MiniSD-TLF.mkv")
}

func openBrowser(url string) {
	var err error

	switch runtime.GOOS {
	case "linux":
		err = exec.Command("xdg-open", url).Start()
	case "windows":
		err = exec.Command("rundll32", "url.dll,FileProtocolHandler", url).Start()
	case "darwin":
		err = exec.Command("open", url).Start()
	default:
		err = fmt.Errorf("unsupported platform")
	}

	if err != nil {
		log.Fatal(err)
	}
}

func fileExists(filename string) bool {
	info, err := os.Stat(filename)
	if os.IsNotExist(err) {
		return false
	}
	return !info.IsDir()
}
