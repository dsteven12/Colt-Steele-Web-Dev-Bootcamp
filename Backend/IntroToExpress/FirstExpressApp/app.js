// Initialized and saved express it to the app var.
var express = require("express");
var app = express();

// "/" => "Hi there!" (Defined a route).

app.get("/", function(req, res) {
    res.send("Hi there!");    
}); 

// "/bye" => "Goodbye!"

app.get("/bye", function(req, res) {
    res.send("Goodbye!");
});

// "/dog" => "Meow!"

app.get("/dog", function(req, res) {
    res.send("Meow!");
});

// Tell Express to listen for requests(start server)

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("=======================");
    console.log("The Server has started!");
    console.log("=======================");
});