/* --- Main --- */
var tag = document.querySelector("h1");
var img1 = document.querySelector("img");
var lis = document.querySelectorAll("li");
var button = document.querySelector("#button-background");
var isToggled = false;

changeH1Background(tag);
catClicker(img1);
changeLiBackground(lis);
changeButtonBackground(button);

/* --- Function Declarations --- */
// changeH1Background is original code without any refactoring.
// changeLIBackground is v2 using booleans to do a similar toggle of the background.
// changeButtonBackground is v3 using the toggle function.

function changeButtonBackground(button) {
	button.addEventListener("click", function() {
		document.body.classList.toggle('purple');
	});
}

function changeLiBackground(lis) {
	for(var i = 0; i < lis.length; i++) {
		lis[i].addEventListener("click", function() {
			if(isToggled) {
				this.style.color = "black";
				this.style.textDecoration = "none";
			} else {
				this.style.color = "purple";
				this.style.textDecoration = "line-through";
			}
			isToggled = !isToggled;
		});
	}	
}

function changeH1Background(tag) {
	tag.classList.add("red-border");
	tag.style.background = "white";

	tag.addEventListener("click", function() {
		if(this.style.background === "white") {
			this.style.background = "blue";
			this.style.color = "white";
		} else {
			this.style.background = "white";
			this.style.color = "black";
		}
	});
}

function catClicker(tag) {
	img1.addEventListener("click", function() {
		//bug when num is same number.
		numChecks(randomIntFromInterval(1, 3));	
	});

	function randomIntFromInterval(min,max) {
    	return Math.floor(Math.random()*(max-min+1)+min);
	}

	function numChecks(num) {
		if(num === 1) {
				img1.setAttribute("src", "http://www.cutestpaw.com/wp-content/uploads/2011/11/cute-cat.jpg");
			} else if(num === 2) {
				img1.setAttribute("src", "http://www.cutestpaw.com/wp-content/uploads/2012/03/sweetie-pies.jpg");
			} else if(num === 3) {
				img1.setAttribute("src", "http://www.cutestpaw.com/wp-content/uploads/2012/02/Good-Friend.jpg")
			}
	}
}