var annoyomatic = {
	answer: "",
	greeting: alert("Are you ready to be annoyed?"),
	instructions: alert("Type in any sentence with \'yes\' in it."),
	annoybot: function() {
		while(this.answer.indexOf("yes") === -1) {
			this.answer = prompt("Are we there yet?");
		}
		alert("Yay, we made it!");
	},
}

annoyomatic.greeting;
annoyomatic.instructions;
annoyomatic.annoybot();