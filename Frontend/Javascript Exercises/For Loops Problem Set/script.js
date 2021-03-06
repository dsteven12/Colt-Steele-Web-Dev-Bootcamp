console.log("|-------------------------------------|");
console.log("|Print all numbers between -10 and 19.|");
console.log("|-------------------------------------|");
var num1 =- 10;
for(num1; num1 <= 19; num1++) {
	console.log(num1);
}
console.log("|-----------------------------------------|");
console.log("|Print all even numbers between 10 and 40.|");
console.log("|-----------------------------------------|");
/* More efficient because prints out half as many numbers, 
*  but depends on the starting variable if it continues to 
*  print evens.
* 
*  var num2 = 10;
*  while(num2 <= 40) {
* 	 console.log(num2); 
*	 num2+=2;
*  }
*/
var num2 = 10; 
for(num2; num2 <= 40; num2++) {
	if(num2 % 2 === 0) {
		console.log(num2);
	}
}
console.log("|------------------------------------------|");
console.log("|Print all odd numbers between 300 and 333.|");
console.log("|------------------------------------------|");
var num3 = 301;
for(num3; num3 <= 333; num3+=2) {
	console.log(num3);
	num3+=2;
}
console.log("|--------------------------------------------------------|");
console.log("|Print all numbers divisible by 5 and 3 between 5 and 50.|");
console.log("|--------------------------------------------------------|");
var num4=5;
for(num4; num4 <= 50; num4++) {
	if((num4 % 3 === 0) && (num4 % 5 === 0)) {
		console.log(num4);
	}
}