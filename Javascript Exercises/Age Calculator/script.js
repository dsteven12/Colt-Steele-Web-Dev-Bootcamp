var calculator = {
	age: 0,
	ageCalculator: function() {
		var ageInDays;
		this.age = prompt(`How old are you?`);
		ageInDays = this.age * 365.25; //rough accounting for leap year
		return console.log(`Look at you! You've been alive for roughly ${ageInDays} days! Talk about an achievement!`);
	}
}

calculator.ageCalculator();