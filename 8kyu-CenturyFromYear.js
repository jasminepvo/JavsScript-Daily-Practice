/*
Introduction
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
FUNDAMENTALSMATHEMATICSDATE TIME
*/

function century(year) {
	// Finish this :)
	if (year <= 100) {
		return 1;
	} else if (year % 100 === 0) {
		return year / 100;
	} else {
		return Math.floor(year / 100) + 1;
	}
}

//Solve time: 18min40sec
//Had to look at a solution because I couldn't wrap my brain around how to solve it in a way that wasn't going to require a million if statements but I looked in a different language like Python so it wasn't JavaScript. I realized I should have looked at what all those if statements I would have written had in common. Ex. seeing that the century is just the year / 100. Or if the year isn't an even number divisible by 100 then the rounded down number will equal year/100 + 1.
