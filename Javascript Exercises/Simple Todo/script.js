var listItem = document.querySelectorAll("li");

strikeOut(listItem);

function strikeOut(listItem) {
	for(var i = 0; i < listItem.length; i++) {
		listItem[i].addEventListener("click", function() {
			this.classList.toggle('check');
		});
	}
}	



