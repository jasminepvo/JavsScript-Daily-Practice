/*
Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

Note that intervals which only touch at a point are non-overlapping. For example, [1, 2] and [2, 3] are non-overlapping.
*/

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  //sort by end time
  intervals.sort((a, b) => a[1] - b[1]);

  //intialize counter and endTime to determine the overlapping
  let counter = 0,
    endTime = intervals[0][1];

  //loop through the intervals starting at index 1
  for (let i = 1; i < intervals.length; i++) {
    //if start time is less than end time of prior interval then count it
    if (intervals[i][0] < endTime) {
      counter++;
    } else {
      //otherwise update the endTime
      endTime = intervals[i][1];
    }
    // console.log("counter:", counter, "endTime:", endTime);
  }
  //return counter
  return counter;
};

//Time: O(nlogn)
//Space: O(1)

console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3],
  ])
); //1

console.log(
  eraseOverlapIntervals([
    [1, 2],
    [1, 2],
    [1, 2],
  ])
); //2

console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
  ])
); //0
