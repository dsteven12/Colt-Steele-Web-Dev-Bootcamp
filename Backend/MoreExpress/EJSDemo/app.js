var express = require("express");
var app = express();

app.get("/", function(req, res) {
    // res.send("Welcome to the Home Page!");
    res.render("home.ejs");
});

app.get("/fallinlovewith/:thing".toLowerCase(), function(req, res) {
    var thing = req.params.thing;
    res.render("love.ejs", {thingVar: thing});
});

app.get("/posts", function(req, res) {
    var posts = [
       {title: "Post 1", author: "Susy"},
       {title: "Post 2", author: "Cameron"},
       {title: "Post 3", author: "Pedro"},
    ]; 
    
    var comments = [
        {author: "Pierre", message: "This is awesome!"},
        {author: "Peitro", message: "Keep up the good work!"},
        {author: "Penny", message: "I can't believe you pulled this off!"},
    ];
    
    res.render("posts.ejs", {posts: posts, comments: comments});
});


app.listen(process.env.PORT, process.env.IP, function() {
    console.log("======================");
    console.log("Server is Listening!!!");
    console.log("======================");
});