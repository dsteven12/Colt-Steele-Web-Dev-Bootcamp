var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var headerColor = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");
var displaySquare = document.querySelectorAll(".square2");


colorDisplay.textContent = pickedColor;
startGame();

resetBtn.addEventListener("click", function() {
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	headerColor.style.backgroundColor = "#232323";
	startGame();
});

easyBtn.addEventListener("click", function() {
	this.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	hideSquare();
	colorDisplay.textContent = pickedColor;
	headerColor.style.backgroundColor = "#232323";
	startGame();

	function hideSquare() {
		for(var i = 0; i < squares.length; i++) {
			if(colors[i]) {
				squares[i].style.backgroundColor = colors[i];
			} else {
				squares[i].style.display = "none";
			}
		}
	};
});

hardBtn.addEventListener("click", function() {
	this.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	showSquare();
	colorDisplay.textContent = pickedColor;
	headerColor.style.backgroundColor = "#232323";
	startGame();

	function showSquare() {
		for(var i = 0; i < squares.length; i++) {
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		}
	}
});


function startGame() {
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].addEventListener("click", function() {
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct";
				changeColors(clickedColor);
				resetBtn.textContent = "Play Again?";
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			} 
		});
	}
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