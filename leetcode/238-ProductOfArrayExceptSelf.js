/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let n = nums.length;
  let result = new Array(n).fill(1);

  // Step 1: Calculate prefix products
  let prefix = 1;
  for (let i = 0; i < n; i++) {
    result[i] = prefix; // Store the current prefix in result
    prefix *= nums[i]; // Update prefix product
  }

  // Step 2: Calculate suffix products and update result
  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= suffix; // Multiply the current result by the suffix
    suffix *= nums[i]; // Update suffix product
  }

  return result;
};
