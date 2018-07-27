// Initialized and saved express it to the app var.
var express = require("express");
var upperCase = require("upper-case");
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

// Creating a pattern using a colon. Only identifies with one slash, not multiple.
// ie: .../r/puppies would work.
// ie: .../r/puppies/newborn wouldn't work. 
app.get("/r/:subredditName", function(req, res) {
    var subredditName = upperCase(req.params["subredditName"]);
    res.send("WELCOME TO THE " + subredditName + " SUBREDDIT!"); 
});

app.get("/r/:subredditName/comments/:id/:title", function(req, res) {
    res.send("WELCOME TO SUBREDDIT COMMENTS PAGE!"); 
});

// Catch all route for everything that doesn't have a specific path.
// Should be last.
app.get("*", function(req, res) {
    res.send("Sorry, you stumbled onto an unspecific route! You're still a STAR~!");
});

// Tell Express to listen for requests(start server)
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("=======================");
    console.log("The Server has started!");
    console.log("=======================");
});