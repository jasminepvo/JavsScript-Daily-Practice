/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

FUNDAMENTALSSTRINGSARRAYS
*/

const sumMix = (x) => x.map((x) => Number(x)).reduce((acc, c) => acc + c);

//Refactored solve time: 4min
