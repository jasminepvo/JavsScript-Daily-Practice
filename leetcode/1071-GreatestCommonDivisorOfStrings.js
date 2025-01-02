/*
For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
*/

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
  // Helper function to calculate GCD of two numbers
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }

  // Step 1: Check if the strings can be formed by the same repeating pattern
  if (str1 + str2 !== str2 + str1) {
    return ""; // If not, there's no common divisor string
  }

  // Step 2: Compute the GCD of the lengths of str1 and str2
  const gcdLength = gcd(str1.length, str2.length);

  // Step 3: Extract the substring of length gcdLength from str1
  return str1.substring(0, gcdLength);
};

console.log(gcdOfStrings("ABCABC", "ABC"), "ABC")

//Jan 2, 2025
/*
P - two strings, uppercase letters 
R - the pattern within the string that repeats itself
E - str1 = "ABCABC", str2 = "ABC", result = "ABC"
P - 
tbh not really understanding this

*/