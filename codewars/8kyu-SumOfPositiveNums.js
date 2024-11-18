/*
DESCRIPTION:
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

ARRAYSFUNDAMENTALS - 8kyu
*/

function positiveSum(arr) {
	let sum = 0;
	for (let i = 0; i <= arr.length; i++) {
		sum += arr[i];
	}
}
console.log(positiveSum([1, 2, 3, 4, 5]));

//Solve time: did not solve
