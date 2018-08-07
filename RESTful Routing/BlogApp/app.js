var express = require("express"),
    expressSanitizer = require("express-sanitizer"),
    methodOverride = require("method-override"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    app = express();
    
// APP Config    
mongoose.connect('mongodb://localhost:27017/blog_app', { useNewUrlParser: true }); 
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressSanitizer());
app.use(methodOverride("_method"));

// Mongoose/Model Config
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,    
    created: {type: Date, default: Date.now},
});

var Blog = mongoose.model("Blog", blogSchema);

// Blog.create({
//     title: "I ate a pizza",
//     image: "https://images.unsplash.com/photo-1511516412963-801b050c92aa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f23e22ac67f9dd47c1471491abfdda84&auto=format&fit=crop&w=1950&q=80",
//     body: "The pizza was delicious. I couldn't believe the depth of flavor in the sauce, the amount of toppings, and the insane level of crust density.",    
// });

// RESTFUL Routes
app.get("/", function(req, res) {
    res.redirect("/blogs");
});

// INDEX Route
app.get("/blogs", function(req, res) {
    Blog.find({}, function(err, blogs) {
        if(err) {
            console.log("=============");
            console.log("OH NO, ERROR!");
            console.log("=============");
            console.log(err);
        } else {
            res.render("index", {blogs: blogs});
        }        
    });
});

// NEW Route
app.get("/blogs/new", function(req, res) {
   res.render("new");
});

// CREATE Route
app.post("/blogs", function(req, res) {
    // Create Blog
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.create(req.body.blog, function(err, newBlog) {
        if(err) {
            console.log("=============");
            console.log("OH NO, ERROR!");
            console.log("=============");
            console.log(err);
            res.render("new");
        } else {
            // Then, redirect to the index.
            res.redirect("/blogs");
        }            
    });
});

// SHOW Route
app.get("/blogs/:id", function(req, res) {
   Blog.findById(req.params.id, function(err, foundBlog) {
        if(err) {
            console.log("=============");
            console.log("OH NO, ERROR!");
            console.log("=============");
            console.log(err);
            res.redirect("/blogs");
        } else {
            res.render("show", {blog: foundBlog});
        }                
   });
});

// EDIT Route
app.get("/blogs/:id/edit", function(req, res) {
    Blog.findById(req.params.id, function(err, foundBlog) {
        if(err) {
            console.log("=============");
            console.log("OH NO, ERROR!");
            console.log("=============");
            console.log(err);
            res.redirect("/blogs");
        } else {
            res.render("edit", {blog: foundBlog});
        }
    });
});

// UPDATE Route
app.put("/blogs/:id", function(req, res) {
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog) {
        if(err) {
            console.log("=============");
            console.log("OH NO, ERROR!");
            console.log("=============");
            console.log(err);
            res.redirect("/blogs");
        } else {
            res.redirect("/blogs/" + req.params.id);
        }
    });
});

// DESTROY Route
app.delete("/blogs/:id", function(req, res){ 
     Blog.findById(req.params.id, function(err, blog){      
       if(err){           
            console.log("=============");
            console.log("OH NO, ERROR!");
            console.log("=============");
            console.log(err);      
        } else {           
            blog.remove();           
            res.redirect("/blogs");       
        }   
    }); 
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("==================================");
    console.log("The BlogApp Server has Started!!!");
    console.log("==================================");
});