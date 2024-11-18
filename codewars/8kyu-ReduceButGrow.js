/*
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
FUNDAMENTALSARRAYS
*/

const grow = (x) => x.reduce((acc, c) => acc * c);

//Solve time: 30seconds
//Refactor time: 30seconds
