/*
Task
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
Input validation
If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

FUNDAMENTALS
*/

function sumArray(array) {
	let min = Math.min(...array);
	let max = Math.max(...array);
	let sum = 0;
	array.forEach((element) => (sum += element));
	return sum - min - max;
}

//Code seems to work when I test on console?
/*
TypeError: array is not iterable (cannot read property null)
    at sumArray (test.js:3:18)
    at Context.<anonymous> (test.js:14:23)
    at processImmediate (internal/timers.js:464:21)
*/

//so it turns out I was missing the null condition but heres another way to solve it:

function sumArray(array) {
	if (array && array.length > 1) {
		let sortedArray = array.sort((a, b) => a - b).slice(1, -1); //sort low to great, then remove index at begining and end
		return sortedArray.reduce((acc, c) => acc + c, 0);
	}
	return 0;
}

//Solve time: 15min
