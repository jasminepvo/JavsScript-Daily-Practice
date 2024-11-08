/*
Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.
*/

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    //basically we are trying to pass the arr into the function
    //so the function can use it as a parameter
    //loop through the arr
    //call the function
    let newArr = [];
    for (let i=0; i<arr.length; i++) {
        newArr.push(fn(arr[i], i));
    }
    return newArr;
};

//Time: O(n)
//Space: O(n)

// Example function to transform elements
function plusone(n) {
    return n + 1;
}

console.log(map([1, 2, 3], plusone)); // Expected output: [2, 3, 4]