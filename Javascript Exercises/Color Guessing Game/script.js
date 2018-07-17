var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var headerColor = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function() {
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct";
			changeColors(clickedColor);
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		} 
	});
}

function pickColor() {
	return colors[Math.floor(Math.random() * colors.length)]; //The maximum is exclusive and the minimum is inclusive
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