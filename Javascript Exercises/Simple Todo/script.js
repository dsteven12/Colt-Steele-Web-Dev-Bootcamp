var listItem = document.querySelectorAll("li");

strikeOut(listItem);
highlightSelection(listItem);

function strikeOut(listItem) {
	for(var i = 0; i < listItem.length; i++) {
		listItem[i].addEventListener("click", function() {
			this.classList.toggle('completed');
		});
	}
}	

function highlightSelection(listItem) {
	for(var i = 0; i < listItem.length; i++) {
		listItem[i].addEventListener("mouseover", function() {
			this.classList.add('text-color-change');
		});

		listItem[i].addEventListener("mouseout", function() {
			this.classList.remove('text-color-change');
		})
	}
}

