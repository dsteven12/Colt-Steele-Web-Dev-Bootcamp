//Working on using Objects

var user = {
	firstName: "",
	lastName: "",
	age: 0,
	userInfo: function() {
		this.firstName = prompt("What is your first name?");
		this.lastName = prompt("What is your last name?");
		this.age = prompt("What is your current age?");

		console.log(`Do you feel old yet ${this.firstName} ${this.lastName}?`)
		console.log(`You\'re are ${this.age} years old!`);
	},

}

user.userInfo();