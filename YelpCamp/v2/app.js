var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose");
    
mongoose.connect('mongodb://localhost:27017/yelp_camp', { useNewUrlParser: true }); 

var campgroundSchema = new mongoose.Schema ({
    name: String,
    image: String,
});

var Campground = mongoose.model("Campground", campgroundSchema);

Campground.create(
    {
        name: "Lake Terrace", 
        image: "https://images.pexels.com/photos/6757/feet-morning-adventure-camping.jpg?auto=compress&cs=tinysrgb&h=650&w=940",
    }, function(err, campground) {
        if(err) {
            console.log("=============");
            console.log("OH NO, ERROR!");
            console.log("=============");
            console.log(err);
        } else {
            console.log("=========================");
            console.log("YOU ADDED A CAMPGROUND!!!");
            console.log("=========================");
            console.log(campground);
        }
    });

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {
    // Get all campgrounds from DB
    Campground.find({}, function(err, campgrounds) {
        if(err) {
            console.log("=============");
            console.log("OH NO, ERROR!");
            console.log("=============");
            console.log(err);
        } else {
            res.render("campgrounds", {campgrounds: campgrounds});
        }        
    });
});

app.get("/campgrounds/new", function(req, res) {
   res.render("new.ejs"); 
});

app.post("/campgrounds", function(req, res) {
   // get data from form and add to campgrounds array
   var name = req.body.name;
   var image = req.body.image;
   var newCampground = {name: name, image: image};
   // Create a new campground and save to DB
   Campground.create(newCampground, function(err, newlyCreated) {
       if(err) {
            console.log("=============");
            console.log("OH NO, ERROR!");
            console.log("=============");
            console.log(err);
       } else {
            // redirect back to campgrounds page
            res.redirect("/campgrounds");
       }
   });
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("==================================");
    console.log("The YelpCamp Server has Started!!!");
    console.log("==================================");
});