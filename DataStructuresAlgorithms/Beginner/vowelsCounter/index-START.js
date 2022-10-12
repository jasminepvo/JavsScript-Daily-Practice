/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

function vowelsCounter(text) {
	// whatever you're looking for goes inside / / then g stands for global search, which means that after finding the first match, it will not start over from the beginning but continue searching from the end of the previous match. i stands for case insensitive search so /xyz/ would match XyZ
	let matchingInstances = text.match(/[aeiou]/gi);

	if (matchingInstances) {
		return matchingInstances.length;
	} else {
		return 0;
	}
}

module.exports = vowelsCounter;
