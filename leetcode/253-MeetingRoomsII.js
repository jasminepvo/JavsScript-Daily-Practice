//Given an array of meeting time interval objects consisting of start and end times [[start_1,end_1],[start_2,end_2],...] (start_i < end_i), find the minimum number of days required to schedule all meetings without any conflicts.

/**
 * @param {Interval[]} intervals
 * @returns {number}
 */
function minMeetingRooms(intervals) {
  // P - interval objects with start and end time
  // R - min # of days
  // E -
  //          0 | 5 | 10 | 15 | 20 | 25 | 30 | 35 | 40
  // (0, 40)  ----------------------------------------
  // (5, 10)     ----
  // (15, 20)            -----------
  // (10, 15)        ----

  // sorted startTime = [0, 5, 10, 15]
  // sorted endTime = [10, 15, 20, 40]

  /* P - 
    sort the start times and end times
    
    iterate through the intervals as long as the startPointer 
    is less than the length of the intervals
    
    conditional statement to check if the start time at the index of the start pointer
    is less than the end time at the index of the end pointer
    if it is, we need to incremement the dayCount
    
    if it isn't, then we move the end pointer
    
    move the start pointer to check the next interval
    
    lastly, return the dayCount
    initialize startPointer, endPointer, dayCount
    edge case: check if the interval length is empty, return 0 days
*/
  let startTimes = intervals
    .map((interval) => interval[0])
    .sort((a, b) => a - b);
  let endTimes = intervals.map((interval) => interval[1]).sort((a, b) => a - b);

  let startPointer = 0,
    endPointer = 0,
    meetingCount = 0,
    result = 0;

  while (startPointer < intervals.length) {
    if (startTimes[startPointer] < endTimes[endPointer]) {
      startPointer++;
      meetingCount++;
    } else {
      endPointer++;
      meetingCount--;
    }
    result = Math.max(result, meetingCount);
  }
  return result;
}

//Time: O(nlogn)
//Space: O(n)

console.log(minMeetingRooms([])); // Should return 0
console.log(minMeetingRooms([[0, 30]])); // Should return 1
console.log(minMeetingRooms([(0, 40), (5, 10), (15, 20)])); //2
console.log(minMeetingRooms([(4, 9)])); //1
