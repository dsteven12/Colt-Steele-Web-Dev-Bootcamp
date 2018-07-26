alert("Hello from the JS File!");
var userName = prompt("What is your full name?");

/**
* Greets the user with their name 
*
*/
function tellUser(user) {
	var user = userName;
	alert(`Hello ${userName}, hope you've had a great day!`);
}
tellUser(userName);