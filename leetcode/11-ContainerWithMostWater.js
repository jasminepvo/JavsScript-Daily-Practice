/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.
*/

/**
 * @param {number[]} heights
 * @return {number}
 */
var maxArea = function(heights) {
    let left = 0 //pointer that starts at the beginning
    let right = heights.length - 1 //pointer that starts at the end
    let maxArea = 0 //this is what we are trying to find so we set to 0 initially

    while (left < right) {
        //set the height to the mininumn height out of the left and right pointers
        const height = Math.min(heights[left], heights[right])
        //width will be right height index - left height index, so initially 0 and however long the length is
        const width = right - left
        //simple math to find area
        const area = height * width
        //grab the greatest area out of what we find
        maxArea = Math.max(area, maxArea)
        
        //pointer logic to continue traversing until they meet in the middle
        if (heights[left] < heights[right]) {
            left++
        } else {
            right--
        }
    }
    return maxArea
};

//Time: O(n)
//Space: O(1)

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])) // 49
console.log(maxArea([7, 8, 6, 2, 5, 4, 8, 3, 7])); //56
console.log(maxArea([1, 8, 6, 2])); //12