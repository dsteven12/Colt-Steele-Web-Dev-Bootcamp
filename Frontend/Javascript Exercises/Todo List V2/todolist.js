var todos = [];

window.setTimeout(function() {
	/* ----- Main ----- */
	var input = prompt("What would you like to do?");
	var index = 0;

	while(input !== "quit") {
		if(input === "list") {
			displayTodos();
		} else if (input === "new") {
			console.log("Added Todo: " + addTodos());
		} else if (input === "delete") {
			console.log("Deleted Todo: " + deleteTodos(index));
			
		}
		input = prompt("What would you like to do")
	}
	console.log("-----------------------------------------");
	console.log("Thanks for trying us out! Come back soon!");
	console.log("-----------------------------------------");

	/* ----- Function Declarations ----- */
	const capitalize = ([first,...rest]) => first.toUpperCase() + rest.join('').toLowerCase();
	
	function displayTodos() {
		if(todos === undefined || todos.length === 0) {
			console.log("There are no todos listed.");
		} 

		todos.forEach(function(todo, index, todos) {
				console.log(`${index}: ${todo}`);
			});
	}

	function addTodos() {
		var newTodo = prompt("Enter new todo: ");
		todos.push(capitalize(newTodo));
		return todos;
	}

	function deleteTodos(index) {
		var deleteTodo = prompt("Which index would you like to delete? ");
		todos.splice(index, 1);
		return todos;
	}

	
}, 500);