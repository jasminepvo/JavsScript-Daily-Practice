//Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // P - array called nums, 
    // R - missing number in the range
    // E - nums = [0,1], array length is 2 so we need a range from 0 to 2. 2 is the missing number so we would return 2
    // P - use the length of the array to determine the range
    //   - use the Map to store the index as the key, boolean as the value
    //   - check for any index with false value
    /* 
    nums = [3, 0, 1]
    nums.length is 3
    loop thru the nums.length + 1, so 4 times bc we need the range to start at 0

    1. sort the array will give us [0, 1, 3]
    2. then grab the last index and store it as the range
    3. then loop through range times
    4. store each index 

    iteration 1:
    i = 0
    nums[i] = 0
    
    store it in the map
    map = { : true }

    iteration 2:
    i = 1
    nums[i] = 0
    map = { 3: true, 0: true }

    iteration 3:
    i = 2
    nums[i] = 1
    map = { 3: true, 0: true, 1: true }

    iteration 4:
    i = 3
    nums[i] = 
    
    */

    const map = new Map();
    
    // Store each number in the map
    for (let num of nums) {
        map.set(num);
    }

    // Check for the missing number in the range [0, n]
    for (let i = 0; i <= nums.length; i++) {
        if (!map.has(i)) {
            return i; // Return the missing number
        }
    }
};

//Time: O(n)
//Space: O(n)

console.log(missingNumber([3, 0, 1])); //2
console.log(missingNumber([0, 1])); //2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); //8