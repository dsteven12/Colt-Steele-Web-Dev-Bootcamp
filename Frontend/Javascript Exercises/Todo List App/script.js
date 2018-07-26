var todos = [];
window.setTimeout(function() {
	var input = prompt("What would you like to do?");

	function choices(input) {
		if(input === "list") {
			displayTodos();
		} else if(input === "new") {
			addTodos();
		}
	}

	function displayTodos() {
		console.log(todos);
	}

	function addTodos() {
		var addTodo = prompt("Enter a todo: ");
		todos.push(addTodo);
		displayTodos();
		return todos;
	}

	while(input !== "quit") {
		choices(input);
		input = prompt("What would you like to do?");
	}
}, 500);