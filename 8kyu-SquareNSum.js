/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

ARRAYSLISTSFUNDAMENTALS
*/

function squareSum(numbers) {
	let sum = 0;
	for (const num of numbers) {
		sum += Math.pow(num, 2);
	}
	return sum;
}

//Solve time: 10 min
//I put the return in the loop at first
