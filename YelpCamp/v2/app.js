var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose");
    
mongoose.connect('mongodb://localhost:27017/yelp_camp', { useNewUrlParser: true }); 
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

var campgroundSchema = new mongoose.Schema ({
    name: String,
    image: String,
    description: String,
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//     {
//         name: "Lake Terrace", 
//         image: "https://images.pexels.com/photos/6757/feet-morning-adventure-camping.jpg?auto=compress&cs=tinysrgb&h=650&w=940",
//         description: "This is a beautiful lake terrace, with two bathrooms, lots of surrounding bodies of water, and beautiful scenery.",
//     }, function(err, campground) {
//         if(err) {
//             console.log("=============");
//             console.log("OH NO, ERROR!");
//             console.log("=============");
//             console.log(err);
//         } else {
//             console.log("=========================");
//             console.log("YOU ADDED A CAMPGROUND!!!");
//             console.log("=========================");
//             console.log(campground);
//         }
//     });

app.get("/", function(req, res) {
    res.render("landing");
});

// INDEX - Show all campgrounds
app.get("/campgrounds", function(req, res) {
    // Get all campgrounds from DB
    Campground.find({}, function(err, campgrounds) {
        if(err) {
            console.log("=============");
            console.log("OH NO, ERROR!");
            console.log("=============");
            console.log(err);
        } else {
            res.render("index", {campgrounds: campgrounds});
        }        
    });
});


// CREATE - Adds new campground to db
app.post("/campgrounds", function(req, res) {
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description: desc};
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

// NEW - Shows form to add new campgrounds
app.get("/campgrounds/new", function(req, res) {
    res.render("new.ejs"); 
});

// SHOW - Shows info about campgrounds
app.get("/campgrounds/:id", function(req, res) {
    // Find the campground with provided ID
    Campground.findById(req.params.id, function(err, foundCampground) {
        if(err) {
            console.log("=============");
            console.log("OH NO, ERROR!");
            console.log("=============");
            console.log(err);
       } else {
            // Render show template with that campground
            res.render("show", {campground: foundCampground});
       }        
    });
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("==================================");
    console.log("The YelpCamp Server has Started!!!");
    console.log("==================================");
});