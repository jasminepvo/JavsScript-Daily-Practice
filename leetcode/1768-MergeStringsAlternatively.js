//You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

//Return the merged string.

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let maxLength = Math.max(word1.length, word2.length);
  let mergedString = "";

  for (let i = 0; i < maxLength; i++) {
    if (i < word1.length) {
      mergedString += word1[i];
    }
    if (i < word2.length) {
      mergedString += word2[i];
    }
  }
  return mergedString;
};

//Nov 18, 2024
/*
P - two strings
R - merge the strings alternating from 1 char from each string at a time
E - word1 = "ab", word2 = "pqrs"
    
    Iteration 1:
    word1 = b
    word2 = pqrs 
    result = a

    Iteration 2: 
    word1 = b
    word2 = qrs 
    result = ap

    Iteration 3:
    word1 = 
    word2 = qrs 
    result = apb

    Iteration 4:
    word1 = 
    word2 = rs 
    result = apbq

    Iteration 5:
    word1 = 
    word2 = s 
    result = apbqr

    Iteration 6:
    word1 = 
    word2 =  
    result = apbqrs

    // P - 
    // so we see that the number of iterations will be the total sum of char from both string
    // or we can check when the length of 1 string has reached 0, we just return the rest of the other string
    // so we can find the max length between the string
    // then we will loop through that many times
    // in our loop we have 2 conditions
    // if the index is less than word1.length, add the char
    // if the index is less than word2.length, add the char
    // return the string
    
*/

//Jan 2, 2025
/*
P - two strings, could be different lengths but less than 100 char per word, all lowercase letters
R - string merged together alternatively
E - word1 = "abc", word2 = "dfg", mergedString = "adbfcg" | word1 = "a", word2 = "bbc", mergedString = "abbc"
P - create a variable that contains an empty string where we will store the mergedString result in
  - create a variable that contains the maxLength between the two strings to determine the loop num
  - loop through until maxLength
  - if index < word1.length, += the letter to add to mergedString
  - if index < word2.length, += the letter to add to mergedString
  - exit the loop, return the result
*/

//Time: O(n)
//Space: O(n+m)

console.log(mergeAlternately("abc", "pqr")); //apbqcr
console.log(mergeAlternately("ab", "pqrs")); //apbqrs
console.log(mergeAlternately("abcd", "pq")); //apbqcd
