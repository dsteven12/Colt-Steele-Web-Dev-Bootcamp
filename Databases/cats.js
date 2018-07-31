var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/cat_app', { useNewUrlParser: true }); 

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperment: String,
});

var Cat = mongoose.model("Cat", catSchema);

// adding a new cat to the DB
// var newCat = new Cat({
//     name: "George",
//     age: 10,
//     temperment: "Grumpy",
// });

// newCat.save(function(err, cat) {
//     if(err) {
//         console.log("=====================");
//         console.log("Something went wrong!");
//         console.log("=====================");
//     } else {
//         console.log("=============================");
//         console.log("We Just Saved A Cat To The DB");
//         console.log("=============================");
//         console.log(cat)
//     }
// });
Cat.create({
   name: "Murphy",
   age: 15,
   temperment: "Nice",
}, function(err, cat) {
     if(err) {
       console.log("=============");
       console.log("OH NO, ERROR!");
       console.log("=============");
       console.log(err);
   } else {
       console.log("===================");
       console.log("YOU CREATED A CAT!!");
       console.log("===================");
       console.log(cat);
   }
}); 

// retrive all cats from the DB and console.log each one
Cat.find({}, function(err, cats) {
   if(err) {
       console.log("=============");
       console.log("OH NO, ERROR!");
       console.log("=============");
       console.log(err);
   } else {
       console.log("===================");
       console.log("*ALL THE CATS.....*");
       console.log("===================");
       console.log(cats);
   }
});