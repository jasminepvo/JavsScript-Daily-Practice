/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // Step 1: Clean the input (remove non-alphanumeric characters and convert to lowercase)
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  // Step 2: Check if the string is the same forwards and backwards
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return false; // Not a palindrome
    }
    left++;
    right--;
  }

  return true; // It is a palindrome
};

//Time: O(n)
//Space: O(n)

console.log(isPalindrome("A man, a plan, a canal: Panama")); //true
console.log(isPalindrome("race a car")); //false

//Jan 3, 2025
/*
class Solution {
  isPalindrome(s) {
    //Remove spaces and convert to lowercase
    s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    console.log(s);

    let start = 0;
    let end = s.length - 1;

    while (start < end) {
      if (s[start] !== s[end]) {
        return false;
      }
      start++;
      end--;
    }
    return true;
  }
}
*/
