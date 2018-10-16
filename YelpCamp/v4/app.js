var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose"),
    Campground = require("./models/campground"),
    Comment    = require("./models/comment"),
    seedDB     = require("./seeds");
    
mongoose.connect('mongodb://localhost:27017/yelp_camp_v3', { useNewUrlParser: true }); 
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
seedDB();   

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

// NEW - Shows form to add new comments
app.get("/campgrounds/newComment", function(req, res) {
    res.render("newComment.ejs");
});

// SHOW - Shows info about campgrounds
app.get("/campgrounds/:id", function(req, res) {
    // Find the campground with provided ID
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground) {
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

// ================
// COMMENTS ROUTES
// ================

app.get("/campgrounds/:id/comments/new", function(req, res) {
    res.send("This will be the comment form!");    
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("==================================");
    console.log("The YelpCamp Server has Started!!!");
    console.log("==================================");
});