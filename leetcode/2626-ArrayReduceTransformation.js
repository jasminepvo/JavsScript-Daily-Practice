/*
Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.

This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.

If the length of the array is 0, the function should return init.

Please solve it without using the built-in Array.reduce method.
*/

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    //basically we want to pass the array and initial value to the function and return the results
    //initialize accum to initial value
    //for each element in the array
    //initialize curr to the value of each index in nums array
    //call the function and store the result in accum
    //return the array

    let accum = init;
    for(let i=0; i<nums.length; i++) {
        let curr = nums[i];
        accum = fn(accum, curr)
    }
    return accum;
}

//Time: O(n)
//Space: O(1)

function sum(accum, curr) {
  return accum + curr;
}

console.log(reduce([1,2,3,4], sum, 0)) //10

function sum1(accum, curr) {
  return accum + curr * curr;
}

console.log(reduce([1,2,3,4], sum1, 100)) //130
