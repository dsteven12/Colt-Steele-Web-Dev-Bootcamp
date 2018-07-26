var arr = [1,2,3]

function printReverse(arr) {
	/* var revArr = arr.reverse(); --- Reverses Array itself */
	for(var i = arr.length - 1; i >= 0; i--) {
		console.log(arr[i]);
	}
}

printReverse(arr);

/*--------------------------*/
// *** isUniform() ***

var arr1 = [1,1,1,1]; 
var arr2 = [2,1,1,1]; 
var arr3 = ["a","b","p"]; 
var arr4 = ["b","b","b"]; 

function isUniform(arr) {
	return arr.every(function(value, index, arr) {
		return value === arr[0];
	});
}

isUniform(arr1); //true
isUniform(arr2); //false
isUniform(arr3); //false
isUniform(arr4); //true

/*--------------------------*/
// *** sumArray() ***

function sumArray(arr) {
	var total = 0; 
	for(var i = 0; i < arr.length; i++) {
		total += arr[i];
	}
	return total
}

/*--------------------------*/

sumArray([1,2,3]); 		//6
sumArray([10,3,10,4]);  //27
sumArray([-5,100]); 	//95

function max(arr) {
	var max = 0;
	arr.forEach(function(number) {
		if(number > max) {
			max = number;
		}
	});
	return max;		
}

max([1,2,3]); 		//3
max([10,3,10,4]);   //10
max([-5,100]); 		//100