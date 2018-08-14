var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/blog_demo', { useNewUrlParser: true }); 


// POST - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String,
});

var Post = mongoose.model("Post", postSchema);

// USER - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema],
});

var User = mongoose.model("User", userSchema);


// var newUser = new User({
//     email: "harry@hogwarts.edu",
//     name: "Harry Potter",
// });

// newUser.posts.push({
//     title: "I just did this post!",
//     content: "Harry uses a wand!",
// });

// newUser.save(function(err, user) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// }); 

// var newPost = new Post({
//     title: "This is a new post!",
//     content: "Can you believe I just added this?",
// });

// newPost.save(function(err, post) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

User.findOne({name: "Harry Potter"}, function(err, user) {
    if(err){
        console.log(err);
    } else {
        user.posts.push({
            title: "3 things I really love!",
            content: "Voldemort. Voldemort. Hagrid.",
        });
        user.save(function(err, user) {
            if(err) {
                console.log(err);
            } else {
                console.log(user);
            }
        });
    }
});