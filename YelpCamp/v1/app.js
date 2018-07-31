var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var campgrounds = [
    {name: "Salmon Creek", image: "https://images.pexels.com/photos/587976/pexels-photo-587976.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"},
    {name: "Trout Creek", image: "https://images.pexels.com/photos/388303/pexels-photo-388303.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"},
    {name: "Keep Creek", image: "https://images.pexels.com/photos/6757/feet-morning-adventure-camping.jpg?auto=compress&cs=tinysrgb&h=650&w=940"},
    {name: "Milk Creek", image: "https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"},
    {name: "Salmon Creek", image: "https://images.pexels.com/photos/587976/pexels-photo-587976.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"},
    {name: "Trout Creek", image: "https://images.pexels.com/photos/388303/pexels-photo-388303.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"},
    {name: "Keep Creek", image: "https://images.pexels.com/photos/6757/feet-morning-adventure-camping.jpg?auto=compress&cs=tinysrgb&h=650&w=940"},
    {name: "Milk Creek", image: "https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"},
    {name: "Milk Creek", image: "https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"},
];

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {

    res.render("campgrounds", {campgrounds: campgrounds});
});

app.get("/campgrounds/new", function(req, res) {
   res.render("new.ejs"); 
});

app.post("/campgrounds", function(req, res) {
   // get data from form and add to campgrounds array
   var name = req.body.name;
   var image = req.body.image;
   var newCampground = {name: name, image: image};
   campgrounds.push(newCampground);
   // redirect back to campgrounds page
   res.redirect("/campgrounds");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("==================================");
    console.log("The YelpCamp Server has Started!!!");
    console.log("==================================");
});