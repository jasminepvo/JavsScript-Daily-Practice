/*
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000
Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59
FUNDAMENTALS
*/

function past(h, m, s) {
	for (let i = 0; i <= 24; i++) {
		let hour = h * (3.6 * Math.pow(10, 6));
		for (let j = 0; j <= 60; j++) {
			let minute = m * 60000;
			for (let i = 0; i <= 60; i++) {
				let second = s * 1000;
				return hour + minute + second;
			}
		}
	}

	//52
}
past(1, 1, 1);

//Solve time: 5minutes

//Refactored solution
const past = (h, m, s) => {
	return (
		h.map((h) => h * (3.6 * Math.pow(10, 6))) +
		m.map((m) => m * 60000) +
		s.map((s) => s * 1000)
	);
};
