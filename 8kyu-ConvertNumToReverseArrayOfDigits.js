/*
DESCRIPTION:
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]
ARRAYSFUNDAMENTALS
*/

function digitize(n) {
	return String(n).split("").reverse().map(Number);
}
digitize(35231); //Output 1, 3, 2, 5, 3

//Solve time: 20min

//Make number a string '35231'
//Split the string '3', '5', '2', '3', '1'
//Reverse the string '1', '3', '2', '5', '3'
//Map returns new array & Number makes the array numbers 1, 3, 2, 5, 3
