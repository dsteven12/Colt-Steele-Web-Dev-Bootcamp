var tag = document.querySelector("h1");
var img1 = document.querySelector("img");
var lis = document.querySelectorAll("li");

changeH1Background(tag);
catClicker(img1);
changeLiBackground(lis);

function changeLiBackground(lis) {
	for(var i = 0; i < lis.length; i++) {
		lis[i].addEventListener("click", function() {
			if(this.style.color === "black") {
				this.style.color = "purple";
				this.style.textDecoration = "line-through";
			} else {
				this.style.color = "black";
				this.style.textDecoration = "none";
			}
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