/*
Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.
*/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
function wordB(s, wordDict) {
  //PREP
  //parameter
  //s = applepie
  //wordDict = ["apple", "pie"]

  //return
  // true, false => true bc apple, pie

  //example
  //applepie -> apple, pie => true

  //pseudocode
  //initialize a set for unique array
  //initialize an array that stores the match
  //loop through each char of each string to see if it matches
  //store true / false in the array for each index
  //so it would be
  //' ' - true
  //a - false
  //ap - false
  //app - false
  //appl - false
  //apple - true
  //p - false
  //pi - false
  //pie - true
  //check to see if last value is true / false
  //false means string cannot be segmented

  // Convert wordDict to a Set for faster lookup
  const wordSet = new Set(wordDict);

  // Dynamic programming array
  const dp = new Array(s.length + 1).fill(false);
  dp[0] = true; // Base case: empty string can be segmented

  // Iterate over all possible ending positions
  for (let i = 1; i <= s.length; i++) {
    // Check all possible starting positions for substring s[j:i]
    for (let j = 0; j < i; j++) {
      const word = s.slice(j, i); // Substring from j to i
      // Check if s[j:i] is in wordSet and if dp[j] is true
      if (dp[j] && wordSet.has(word)) {
        dp[i] = true;
        break; // Stop further checks for this i once dp[i] is true
      }
    }
  }
  return dp[s.length];
};

//Space: O(n)
//Time: O(n^3)

//Example
const s = "applepie";
const wordDict = ["apple", "pie"];
console.log(wordBreak(s, wordDict), true); // Expected output: true
