/*
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

FUNDAMENTALSFUNCTIONAL PROGRAMMING
*/

function find_average(array) {
	let sum = 0;
	if (array.length > 0) {
		array.forEach((num) => {
			return (sum += num);
		});
	} else {
		return 0;
	}
	return sum / array.length;
}

//Solve time: 7min

// This is what I originally had
// function find_average(array) {
// 	array.forEach((num) => num.reduce((acc, c) => acc + c, 0) / array.length);
// }

//This is what I was going for
// const find_average = (array) => {
//   return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
// }
