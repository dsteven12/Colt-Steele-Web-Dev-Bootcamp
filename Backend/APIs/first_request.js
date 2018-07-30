var request = require("request");
request('http://www.google.com', function(err, res, body) {
    if(!err && res.statusCode == 200) {
        console.log(body); //Show entered website body.
    } else {
        showErr(err);
    }
});

function showErr(err) {
    console.log("=======================");
    console.log("*SOMETHING WENT WRONG!*");
    console.log("=======================");
    console.log(err);
    console.log("=======================");
}