var tag = document.querySelector("h1");
tag.classList.add("red-border");

var img1 = document.querySelector("img")
img1.addEventListener("click", function() {
	//bug when num is same number.
	var num = randomIntFromInterval(1, 3);
	numChecks(num);

	
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