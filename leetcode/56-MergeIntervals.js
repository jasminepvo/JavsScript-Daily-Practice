/*
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    //sort arrays by start time
    intervals.sort((a,b) => a[0] - b[0])
    const merged = []
    //store pre at first array index 0
    let prev = intervals[0]

    for (let i = 1; i < intervals.length; i++) {
        //start interval at index 1
        let interval = intervals[i];

        //compare interval(start time) w prev(end time) to check for overlaps
        if (interval[0] <= prev[1]) {
            //merge the intervals by updating the end time to the max end time
            prev[1] = Math.max(prev[1], interval[1])
        } else {
            //if they don't overlap, add interval as it
            merged.push(prev);
            //update the prev to the current
            prev = interval
        }
    }
    //add the last interval to merged list
    merged.push(prev)

    return merged
};

//Time: O(nlogn)
//Space: O(n)

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
); //[[1,6],[8,10],[15,18]]
console.log(
  merge([
    [1, 4],
    [4, 5],
  ])
); //[[1,5]]