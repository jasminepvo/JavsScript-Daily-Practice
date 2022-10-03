/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

STRINGSFUNDAMENTALS
*/

const getCount = (str) =>
	str
		.split("")
		.filter((x) => x === "a" || x === "e" || x === "i" || x === "o" || x == "u")
		.length;

//Refactored solve time: 15min
