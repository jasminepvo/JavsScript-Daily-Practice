const fs = require("fs");

// Read the JSON file
const jsonData = fs.readFileSync("./gg/appts-days.json", "utf-8");

// Parse the JSON data
const apptsByDay = JSON.parse(jsonData);

// Solve for Monday, then try other days of the week
const appts = apptsByDay[1];

// Example: Log the data for debugging
console.log(appts);

/*
Given an array of appointments, determine the maximum number of available 30 min slots in a given day's schedule
- Appts can be 30, 60, 90 min long
- Appts can not overlap
- Professional has fixed hours (9:00 to 17:00)
*/

function MaxAvailSlots(appts) {
  //Fixed Hours from 9:00 - 17:00 converted to minutes
  const fixedStart = 9 * 60; //540
  const fixedEnd = 17 * 60; //1020

  let prevEndTime = fixedStart;

  //counter to track available 30 min slots
  let counter = 0;

  //loop through objects with appt start, duration
  for (let i = 0; i < appts.length; i++) {
    console.log("------------- Iteration", i, "--------------");

    //split the time 9:15 into "9", "15"
    let start = appts[i].start.split(":");

    //destructure array
    const [startHour, startMinutes] = start;

    //start hour converted to minutes then add start minutes
    let startTime = Number(startHour) * 60 + Number(startMinutes);

    //end time then add duration to get start time
    let endTime = startTime + appts[i].duration;
    console.log("startTime:", startTime, "endTime:", endTime);

    //availableTime = 555 - 540 = 15
    let availableTime = startTime - prevEndTime;
    console.log(
      "startTime:",
      startTime,
      "- prevEndTime:",
      prevEndTime,
      "= availableTime:",
      availableTime
    );

    //if the diff is greater than 30
    if (availableTime >= 30) {
      //increment counter diff/30 since were looking for incrememnts of 30
      counter += availableTime / 30;
      console.log(
        "counter:",
        counter,
        "30 minute time slots because availableTime / 30 min"
      );
    }
    prevEndTime = endTime;

    console.log("              ");
    console.log("              ");
  }
  console.log("availTimeAfterLastMeeting = fixedEnd - prevEndTime");
  let availTimeAfterLastMeeting = fixedEnd - prevEndTime;
  console.log(fixedEnd, "-", prevEndTime, "=", availTimeAfterLastMeeting);
  if (availTimeAfterLastMeeting >= 30) {
    counter += availTimeAfterLastMeeting / 30;
    console.log(
      "availTimeAfterLastMeeting:",
      availTimeAfterLastMeeting,
      "/ 30 min time slot =",
      counter,
      "time slots"
    );
  }

  return counter;
}

console.log(MaxAvailSlots(appts));

/*
Parameters - array of objects
Return - max num of avail time slots
Example -
|9:15|
Pseudocode -
initialize a counter to store the result
figure out the end time by adding the duration to the start time
convert the time into minutes
60 / 30 = 2 
fixedStart = 9:00 
fixedEnd = 17:00
*/