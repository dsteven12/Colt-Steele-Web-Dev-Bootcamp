var age = {
	age: 0,
	getAge: function() {
		this.age = Number(prompt("What is your age?"));
		return this.age;
	},
	printMessage: function() {
		if(this.age < 0) {
			return ("Invalid entry: Age cannot be a negative number.");
		} else if(this.age === 21) {
			return ("Happy 21st Birthday!!");
		} else if((this.age % 2) === 1) {
			return ("Your Age is Odd!");
		} else if((this.age % Math.sqrt(this.age)) === 0) {
			return ("Perfect Square!");
		}
	},
}

age.getAge();
console.log(age.printMessage());