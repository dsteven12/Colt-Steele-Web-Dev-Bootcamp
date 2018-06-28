var guessingGame = {
	userNumber: 0,
	randNumber: 0,
	winner: false,
	generateNumber: function(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		this.randNumber = Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
		return this.randNumber;
	},
	guessNumber: function() {
		this.userNumber = Number(prompt(`Guess a number between 0 - 5:`));
		return this.userNumber;
	},
	winnerOrLoser: function(userNum, randNum) {
		if(guessingGame.userNumber === guessingGame.randNumber) {
			return guessingGame.winner = true;
		}
	},
}

var guess = 0;
var randNum = guessingGame.generateNumber(0, 5);

while(userNum != randNum) {
	var userNum = guessingGame.guessNumber(); 
	guessingGame.winnerOrLoser(userNum, randNum);
	if(guessingGame.winner === true) {
		alert("You've won!");
	} else {
		guess++;
		if(guess === 1) {
			alert(`You\'ve guessed ${guess} time. Try again!`);	
		} else {
			alert(`You\'ve guessed ${guess} times. Try again!`);
		}		
	}
}




	

