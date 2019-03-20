package main

import (
	"net/http"
	"os"
)

func main() {

	// Load the port from its environment variable. If unspecified for whatever reason, default to 3000
	var PORT string
	if PORT = os.Getenv("PORT"); PORT == "" {
		PORT = "3000"
	}

	// Setup a static file handler. All routes prefixed with '/static/' will be routed appropriately
	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("www/static"))))

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "./www/static/templates/index.html")
	})
	http.ListenAndServe(":" + PORT, nil)
}
