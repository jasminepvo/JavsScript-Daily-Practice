/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string

FUNDAMENTALSSTRINGSARRAYS
*/

function fakeBin(x) {
	return x
		.split("")
		.map((num) => (num < 5 ? 0 : 1))
		.join("");
}

//Split string into array of strings, map returns new array based on condition (for nums less than 5, return 0 and nums greater than 5 return 1), join removes array into 1 string of nums

//Solve time: 25min
