/*
Given an integer n and two other values, build an array of size n filled with these two values alternating.

Examples
5, true, false     -->  [true, false, true, false, true]
10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
0, "one", "two"    -->  []
Good luck!

FUNDAMENTALSARRAYS
*/

//my solution at 12 min
function alternate(n, firstValue, secondValue) {
	let arr = [];
	//if n size is even number, values will print evenly
	if (n % 2 === 0) {
		//loop through n size / 2 to know how many times to print
		//each value since they are alternating
		for (let i = 0; i < n / 2; i++) {
			//push value to array
			arr.push(firstValue);
			arr.push(secondValue);
			return arr;
		}
	} else if (n % 2 != 0) {
		for (let i = 0; i < n / 2; i++) {
			arr.push(firstValue);
			arr.push(secondValue);
		}
		arr.push(firstValue);
		return arr;
	}
}

//codeManS solution
function alternate(n, firstValue, secondValue) {
	//empty array to store values
	let result = [];
	//start at 0 and loop through index less than n
	for (let index = 0; index < n; index++) {
		//if index is not divisible by 2 essentially odd numbers
		if (!(index % 2)) {
			//push firstValue to array
			result.push(firstValue);
		} else {
			//push secondValue to array for all other numbers essentially even numbers
			result.push(secondValue);
		}
	}
	//exit array and print result
	return result;
}

//alternate solution??
//const alternate(n, firstValue, secondValue) => Array.from({length: n}, (_, index) => !(index % 2) ? firstValue : secondValue)

//I was close and had somewhat of the right idea but should have looped first then had the conditional statement inside to check the index values.
