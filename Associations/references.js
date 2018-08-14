var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/blog_demo_2', { useNewUrlParser: true }); 

var Post = require("./models/post");
var User = require("./models/user");

// Post.create({
//   title: "How to cook the best burger pt. 2",
//   content: "Cut the pep slice into slices for 4 people..."
// }, function(err, post){
//     if(err) {
//         console.log(err);
//     } else {
//         User.findOne({name: "Bob Button"}, function(err, foundUser){
//             if(err){
//                 console.log(err);
//             } else {
//                 foundUser.posts.push(post);
//                 foundUser.save(function(err, data){
//                     if(err){
//                         console.log(err);
//                     } else {
//                         console.log(data);
//                     }
//                 });
//             }
//         });    
//     }
// });

// Find User
// Find All Posts For That User
User.findOne({name: "Bob Button"}).populate("posts").exec(function(err, user) {
    if(err) {
        console.log(err);
    } else {
        console.log(user);
    }
});

// User.create({
//     email: "bob@gmail.com",
//     name: "Bob Button",
// }, function(err, createUser) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(createUser);
//     }
// });

// var newUser = new User({
//     email: "tiffany@gmail.com",
//     name: "Tiffany Lourdes",
// });

// newUser.save(function(err, user) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// }); 