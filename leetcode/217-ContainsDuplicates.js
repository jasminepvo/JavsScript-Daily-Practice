//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 /**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  //parameters
  //given nums which is an array of values that could repeat
  //no asci char, just integers

  //return
  //true if values repeat itself, false if array is unique

  //example
  //console.log(containsDuplicate([1,2,3,4]), 'false')
  //console.log(containsDuplicate([1,2,3,4,4]), 'true')

  //pseudocode
  //mind automatically goes to Set bc I know Set is unique and no duplicates
  //initialize a set that takes in nums array
  //compare the size of the set to the length of the nums array
  //if same size, then return false (every element is disctint)
  //if not same save, then return true (value must appear at least twice in the array)

  let noDuplicate = new Set(nums);

  return noDuplicate.size !== nums.length;
};

//Time: O(n)
//Space: O(n)

//Example
console.log(containsDuplicate([1,2,3,4]), 'false')
console.log(containsDuplicate([1,2,3,4,4]), 'true')