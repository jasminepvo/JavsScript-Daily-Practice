//Given an array of meeting time interval objects consisting of start and end times [[start_1,end_1],[start_2,end_2],...] (start_i < end_i), determine if a person could add all meetings to their schedule without any conflicts.

function canAttendMeetings(intervals) {
  //if the start time of next index is greater than the
  //end time of the first index
  //then it overlaps so return false

  intervals.sort((a, b) => a.start - b.start);

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i].start < intervals[i - 1].end) {
      return false;
    }
  }
  return true;
}

//Time: O(nlogn)
//Space: O(1)

console.log(canAttendMeetings([(0, 30), (5, 10), (15, 20)])); //false
console.log(canAttendMeetings([(5, 8), (9, 15)])); //true
