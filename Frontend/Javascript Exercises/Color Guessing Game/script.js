var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var headerColor = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
	colorDisplay.textContent = pickedColor;
	setupModeButtons();
	setupSquares();
	reset();
	resetBtn.addEventListener("click", function() {
		reset();
	});
}

function setupModeButtons() {
	for(var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();	
		});
	}	
}

function setupSquares() {
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].addEventListener("click", function() {
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct";
				changeColors(clickedColor);
				resetBtn.textContent = "Play Again?";
			} else {
				this.style.backgroundColor = "steelblue";
				messageDisplay.textContent = "Try Again";
			} 
		});
	}
}

function reset() {
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;	
	setupSquares();
	resetBtn.textContent = "New Colors";
	messageDisplay.textContent = "";	
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	headerColor.style.backgroundColor = "steelblue";
}


function pickColor() {
	return colors[Math.floor(Math.random() * colors.length)]; 
}

function changeColors(color) {
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
		headerColor.style.backgroundColor = color; 
	}
}

function generateRandomColors(num) {
	//make an array
	var arr = [];
	for(var i = 0; i < num; i++) {
		arr.push(randomColor());
	}

	function randomColor() {
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		return `rgb(${r}, ${g}, ${b})`;
	}

	return arr;
}