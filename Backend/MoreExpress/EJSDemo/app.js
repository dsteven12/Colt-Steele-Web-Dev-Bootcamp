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


app.listen(process.env.PORT, process.env.IP, function() {
    console.log("======================");
    console.log("Server is Listening!!!");
    console.log("======================");
});