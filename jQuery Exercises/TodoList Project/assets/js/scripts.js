// Toggle Todo Input
$(".fa-edit").on("click", function() {
	$("input[type=text]").fadeToggle();
});

// Adding New Todo
$("input[type=text]").on("keypress", function(e) {
	if(e.which === 13) {
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append(`<li><span><i class='fa fa-trash'></i></span> ${todoText}</li>`);
	}
});

// Deleting Todo 
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

$("ul").on("click", "li span", function(e) {
	$(this).parent().fadeOut(300, function() {
		$(this).remove();
	}); 
	e.stopPropagation();
});

