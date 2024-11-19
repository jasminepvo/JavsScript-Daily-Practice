/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    //P - nums array, target (num, integer)
    //R - indices of the num that add up to the target
    //E - [3, 2, 4], target is 6.
    //3+2 = 5 so not this one
    //3+4 = 7 so not this one
    //2+4 = 6 so this is the target we are looking for
    //which would return index 1 and 2
    //[1,2]
    
    //initialize an empty map
    const map = new Map()

    //loop through the nums array until end of the array length
    for (let i=0; i<nums.length; i++) {
        //initialize variable that will be the complement of the target and current index of the array
        let complement = target - nums[i]

        //check to see if the complement exists in the map
        if (map.has(complement)) {
            return [map.get(complement), i]
        }

        //otherwise add the current num and its index to our map
        map.set(nums[i], i)
    }
}

//Time: O(n)
//Space: O(n)

console.log(twoSum([2, 7, 11, 15], 9)) //[0,1]
console.log(twoSum([3, 2, 4], 6)) //[1,2]