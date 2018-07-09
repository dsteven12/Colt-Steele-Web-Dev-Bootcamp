var listItem = document.querySelectorAll("li");

strikeOut(listItem);
highlightSelection(listItem);

function strikeOut(listItem) {
	for(var i = 0; i < listItem.length; i++) {
		listItem[i].addEventListener("click", function() {
			this.classList.toggle('check');
		});
	}
}	

function highlightSelection(listItem) {
	for(var i = 0; i < listItem.length; i++) {
		listItem[i].addEventListener("mouseover", function() {
			this.style.color = "blue";
		});

		listItem[i].addEventListener("mouseout", function() {
			this.style.color = "black";
		})
	}
}

