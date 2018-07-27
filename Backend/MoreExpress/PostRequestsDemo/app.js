var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

var friends = ["Peter", "Larry", "Mo", "Joe", "Wilson", "Connie"];

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/friends", function(req, res) {
    res.render("friends", {friends: friends});
});

app.post("/addFriend", function(req, res) {
    var newFriend = req.body.newFriend;
    friends.push(newFriend);
    res.redirect("/friends");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("======================");
    console.log("Server is Listening!!!");
    console.log("======================");
});
