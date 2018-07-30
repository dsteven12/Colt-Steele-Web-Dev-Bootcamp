var request = require("request");
request('https://query.yahooapis.com/v1/public/yql?q=select%20astronomy.sunset%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22maui%2C%20hi%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys', function(err, res, body) {
    if(!err && res.statusCode == 200) {
        console.log(showSunset(body));
    } else {
        showErr(err);
    }
});

request('https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%202487889&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys', function(err, res, body) {
    if(!err && res.statusCode == 200) {
        console.log(showWeatherConditions(body));
    } else {
        showErr(err);
    }
});

function showSunset(body) {
    var parsedData = JSON.parse(body);
    return parsedData["query"]["results"]["channel"]["astronomy"].sunset;
}

function showWeatherConditions(body) {
    var parsedData = JSON.parse(body);
    var city = "San Diego";
    var date = parsedData["query"]["results"]["channel"]["item"]["condition"].date;
    var temp = parsedData["query"]["results"]["channel"]["item"]["condition"].temp;
    var text = parsedData["query"]["results"]["channel"]["item"]["condition"].text;
    var returnString = `The weather conditions for ${city} on ${date} is ${temp} degrees and ${text}.`;
    return returnString;
}

function showErr(err) {
    console.log("=======================");
    console.log("*SOMETHING WENT WRONG!*");
    console.log("=======================");
    console.log(err);
    console.log("=======================");
}