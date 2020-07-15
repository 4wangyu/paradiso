package cmd

import (
	"database/sql"
	"fmt"
	"os"
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
		initDB()
	},
}

func init() {
	rootCmd.AddCommand(scanCmd)
}

func check(e error) {
	if e != nil {
		panic(e)
	}
}

func initDB() {
	f, err := os.Create(fmt.Sprintf("media.%s.db", time.Now().Format("20060102150405")))
	check(err)

	db, err := sql.Open("sqlite3", f.Name())
	check(err)

	_, err = db.Exec(`create table media (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, path TEXT NOT NULL);`)
	check(err)

	db.Close()
}
