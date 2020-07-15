package cmd

import (
	"database/sql"
	"fmt"
	"os"
	"path/filepath"
	"time"

	_ "github.com/mattn/go-sqlite3"
	"github.com/spf13/cobra"
)

// scanCmd represents the scan command
var scanCmd = &cobra.Command{
	Use:   "scan",
	Short: "Scans all media under specified path.",
	Long:  `Scans all media under specified path.`,
	Run: func(cmd *cobra.Command, args []string) {
		dbFile := initDB()

		if len(args) > 0 {
			if filepath.IsAbs(args[0]) {
				scan(args[0], dbFile)
			} else {
				wd, err := os.Getwd()
				check(err)
				scan(fmt.Sprintf("%s/%s", wd, args[0]), dbFile)
			}
		}
	},
}

func init() {
	rootCmd.AddCommand(scanCmd)
}

func initDB() string {
	f, err := os.Create(fmt.Sprintf("media.%s.db", time.Now().Format("20060102150405")))
	check(err)

	db, err := sql.Open("sqlite3", f.Name())
	check(err)

	_, err = db.Exec(`create table media (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, path TEXT NOT NULL, date INTEGER);`)
	check(err)

	db.Close()

	return f.Name()
}

func scan(path string, dbFile string) {
	if _, err := os.Stat(path); os.IsNotExist(err) {
		fmt.Printf("Path %s does not exist.\n", path)
		os.Exit(1)
	}

	db, err := sql.Open("sqlite3", dbFile)
	check(err)
	defer db.Close()

	filepath.Walk(path, func(path string, info os.FileInfo, err error) error {
		check(err)

		if info.IsDir() {
			return nil
		}

		extension := filepath.Ext(path)
		if contains([]string{".mp4", ".mkv"}, extension) {
			stmt, err := db.Prepare("INSERT INTO media(path, name, date) values(?,?,?)")
			check(err)

			_, err = stmt.Exec(path, info.Name(), info.ModTime().Unix())
			check(err)
		}

		return nil
	})
}

func contains(slice []string, val string) bool {
	for _, item := range slice {
		if item == val {
			return true
		}
	}
	return false
}

func check(e error) {
	if e != nil {
		panic(e)
	}
}
