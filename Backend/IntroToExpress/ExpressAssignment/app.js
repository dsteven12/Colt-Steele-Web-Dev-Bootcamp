var express = require("express");
var app = express();

app.get("/", function(req, res) {
   res.send("Hi there, welcome to my assignment!".toUpperCase()); 
});

app.get("/speak/:animal", function(req, res) {
    var animal = req.params.animal.toLowerCase();
    var sound = "";
    switch(animal) {
        case "pig": 
            sound = "Oink!";
            break;
        case "cow": 
            sound = "Moo!";
            break;
        case "dog":
            sound = "Woof Woof!";
            break;
        case "cat":
            sound = "Meow!";
            break;
        case "chicken":
            sound = "KaKa!";
            break;  
    }
    res.send("The " + animal + " says '" + sound + "'");
});

app.get("/repeat/:message/:num", function(req, res) {
    var message = req.params.message;
    var num = Number(req.params.num);
    var result = "";
    for(var i = 0; i < num; i++) {
        result += message + " ";
    }
    res.send(result);
});

app.get("*", function(req, res) {
    res.send("Sorry, page not found...What are you doing with your life?");
});

// Tell Express to listen for requests(start server)
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("=======================");
    console.log("The Server has started!");
    console.log("=======================");
});