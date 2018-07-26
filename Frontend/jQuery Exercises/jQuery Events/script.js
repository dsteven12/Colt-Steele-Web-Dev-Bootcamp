$("button").on("mouseenter", function() {
	var mouseEnterStyles = {
		background: "lightblue",
		color: "white",
		"font-weight": "bold",
	}

	$(this).css(mouseEnterStyles);
});

$("button").on("mouseleave", function() {
	var mouseLeaveStyles = {
		background: "purple",
		"font-weight": 400,
	}

	$(this).css(mouseLeaveStyles);
});

// click() only adds listeners for exisiting elements.
$("button").click(function() {
	var text = $(this).text();
	alert(`Why did you click the \"${text}\" button?!`);
	$(this).css("background", "pink");
	$(this).css("color", "black");
});

$("input").keypress(function(e) {
	var text = $(this).val();
	if(e.which === 13) {
		console.log(`${text}`);
	}
});

// on() adds listeners to future elements as well.
$("p").on("click", function() {
	$(this).css("color", "purple");
});