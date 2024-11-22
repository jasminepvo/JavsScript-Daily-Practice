/*
You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.

Note that you don't need to modify intervals in-place. You can make a new array and return it.
*/

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  intervals.sort((a, b) => a[0] - b[0]);
  let newarr = [];

  for (let i = 0; i < intervals.length; i++) {
    let interval = intervals[i];

    if (newInterval === null || interval[1] < newInterval[0]) {
      newarr.push(interval);
    } else if (interval[0] > newInterval[1]) {
      newarr.push(newInterval);
      newarr.push(interval);
      newInterval = null;
    } else {
      newInterval[0] = Math.min(newInterval[0], interval[0]);
      newInterval[1] = Math.min(newInterval[1], interval[1]);
    }
  }
  if (newInterval !== null) {
    newarr.push(newInterval)
  }
  return newarr
};

console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]],[4,8]))
/*
Input:
        |1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|
[1,2]   |---|
[3,5]       |-----|
[6,7]             |---|
[8,10]                 |----|
[12,16]                          |-------------|
[4,8]         |---------|

Expected Output:
        |1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|
[1,2]   |---|
[3,10]       |---------------|
[12,16]                          |-------------|
*/
/*
var insert = function (intervals, newInterval) {
  // Sort intervals by start time
  intervals.sort((a, b) => a[0] - b[0]);

  // Initialize the result array
  let newArray = [];

  for (let i = 0; i < intervals.length; i++) {
    let interval = intervals[i];

    // If the current interval is completely before the newInterval
    if (newInterval === null || interval[1] < newInterval[0]) {
      newArray.push(interval);
    }
    // If the current interval is completely after the newInterval
    else if (interval[0] > newInterval[1]) {
      newArray.push(newInterval);
      newArray.push(interval);
      newInterval = null; // Ensure newInterval is not added again
    }
    // Overlapping intervals case
    else {
      newInterval[0] = Math.min(interval[0], newInterval[0]);
      newInterval[1] = Math.max(interval[1], newInterval[1]);
    }
  }

  // If newInterval was not added
  if (newInterval !== null) {
    newArray.push(newInterval);
  }

  return newArray;
};
*/
