//Grab h2 with ID on each Player 1 score and Player 2 score.
//Player 1 button should increase score on h2 player 1 side.
//Player 2 button should increase score on h2 player 2 side.
//If player gets to max score, score should turn green. (Score cannot go higher than max score).
//Specify max score by using input number field, which changes Player To: Max Score.
//Reset button resets score for both players.

var p1Btn = document.querySelector('#player1-btn');
var p2Btn = document.querySelector('#player2-btn');
var p1Display = document.querySelector('#p1Display');
var p2Display = document.querySelector('#p2Display');
var resetBtn = document.querySelector('#reset-score');
var topScore = document.querySelector('#top-score');
var maxScoreDisplay = document.querySelector('#max-score');
var p1Score = 0;
var p2Score = 0;
var maxScore = 3;
var gameOver = false;

p1Btn.addEventListener("click", function() {
	if(!gameOver) {
		p1Score++;
		if(p1Score === maxScore) {
			p1Display.classList.add("winner");
			gameOver = true;
		}
	} 
	p1Display.textContent = p1Score;
});

p2Btn.addEventListener("click", function() {
	if(!gameOver) {
		p2Score++;
		if(p2Score === maxScore) {
			p2Display.classList.add("winner");
			gameOver = true;
		}
	} 
	p2Display.textContent = p2Score;
});

topScore.addEventListener("change", function() {
	maxScore = Number(this.value);
	maxScoreDisplay.textContent = maxScore;
	reset();
});


resetBtn.addEventListener("click", function() {
	reset();
});

function reset() {
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	p1Display.classList.remove("winner")
	p2Display.classList.remove("winner")
	gameOver = false;
}
