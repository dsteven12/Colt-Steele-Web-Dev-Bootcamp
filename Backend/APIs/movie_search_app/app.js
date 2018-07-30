var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("search");
});

app.get("/results", function(req, res) {
    var query = req.query.search;
    var url = "http://omdbapi.com/?s=" + query + "&apikey=thewdb";
    request(url, function(error, response, body) {
        if(!error && response.statusCode == 200) {
            var parsedData = JSON.parse(body);
            res.render("results", {data: parsedData});
        } else {
            showErr(error);
        }
    });
});

function showErr(err) {
    console.log("=======================");
    console.log("*SOMETHING WENT WRONG!*");
    console.log("=======================");
    console.log(err);
    console.log("=======================");
}

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("========================");
    console.log("Movie App has started!!!");
    console.log("========================");
});