package main

import (
	"net/http"
)

func main() {
	http.Handle("/", http.FileServer(http.Dir("./Home")))
	http.ListenAndServe(":8000", nil)
}

//package main
//
//import (
//	"fmt"
//	"net/http"
//)
//
//func handler(w http.ResponseWriter, r *http.Request) {
//	fmt.Fprintf(w, "Hello world!")
//}
//
//func main() {
//	http.HandleFunc("/", handler)
//	http.ListenAndServe(":8000", nil)
//}