//Given an integer array nums of size n, return the number with the value closest to 0 in nums. If there are multiple answers, return the number with the largest value.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
    //initialize closest to the first index of the nums array
    let closest = nums[0];

    //loop through and check if its greater than the current number
    for (const num of nums) {
        //check if the absolute num is less than the absolute closest or absolute num is the closest and num is greater than closest
        if ( Math.abs(num) < Math.abs(closest) || ( Math.abs(num) === Math.abs(closest) && num > closest ) ) {
            //update to the closest num to 0
            closest = num
        }
    }
    return closest
};

//Time: O(n)
//Space: O(1)

console.log(findClosestNumber([-4, -2, 1, 4, 8])) //1
console.log(findClosestNumber([2, -1, 1])) //1