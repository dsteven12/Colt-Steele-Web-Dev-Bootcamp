// function isEven(num) {
// 	var num = num;
// 	if(num % 2 === 0) {
// 		return true;
// 	}
// 	return false;
// }

// Refactored isEven()
function isEven(num) {
	return num % 2 === 0;
}

// function factorial(num) {
// 	var result = num;
// 	if (num === 0 || num === 1) {
// 		return 1;
// 	}
// 	while (num > 1) {
// 		num--;
// 		result = result * num;
// 	}
// 	return result;
// }

// Refactored factorial(num)

function factorial(num) {
	var result = 1;
	for(var i = 2; i <= num; i++) {
		result *= i;
	}
	return result; 
}

function kebabToSnake(str) {
	return str.replace(/-/g, "_");
}