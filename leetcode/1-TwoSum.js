/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
Easy - hash map
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function twoSum(nums, target) {
  const map = new Map();

  for (let i=0; i<nums.length; i++) {
    let complement = target - nums[i]

    if (map.has(complement)) {
        return [map.get(complement), i]
    }

    map.set(nums[i], i)
  }
};

//Time: O(n)
//Space: O(n)

//Parameters - nums array, target (num, integer)
//Return - indices of the num that add up to the target
//Example - 
//[3, 2, 4], target is 6.
//3+2 = 5 doesn't equal 6, so not this one
//3+4 = 7 doesn't equal 6, so not this one
//2+4 = 6 so this is the target we are looking for
//which would return index 1 and 2
//[1,2]
// Pseduocode -
//initialize an empty map
//loop through the nums array until end of the array length
//initialize variable that will be the complement of the target and current index of the array
//check to see if the complement exists in the map
//otherwise add the current num and its index to our map

console.log(twoSum([2, 7, 11, 15], 9)); //[ 0, 1 ]
/*
Iteration 0:
i=0, nums[0]=2
complement = 9 - 2 = 7
map = { }
7 does not exist in map so we set it
map = { (2, 0) }

Iteration 1:
i=1, nums[1]=7
complement = 9 - 7 = 2
map = { (2, 0) }
2 does exist in map so we return the index it is at, along with the current index (i)
map.has(complement) = map.has(2) = index 0
i = 1
return [0, 1]
*/

console.log(twoSum([3, 2, 4], 6)); //[ 1, 2 ]
/*
Iteration 0:
i=0, nums[0]=3
complement = 6 - 3 = 3
map = { }
3 does not exist in map so we set it
map = { (3, 0) }

Iteration 1:
i=1, nums[1]=2
complement = 6 - 2 = 4
map = { (3, 0) }
4 does exist in map so we set it
map = { (3, 0), (2, 1) }

Iteration 2:
i=2, nums[2]=4
complement = 6 - 4 = 2
2 exists in map so we return the index it is at, along with the current index (i)
map.has(complement) = map.has(2) = index 1
i = 2
return [1, 2]
*/

