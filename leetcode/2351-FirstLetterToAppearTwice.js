/*
Given a string s consisting of lowercase English letters, return the first letter to appear twice.

Note:

A letter a appears twice before another letter b if the second occurrence of a is before the second occurrence of b.
s will contain at least one letter that appears twice.
*/

/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    //create a map called charMap
    //iterate through the string
    //check to see if the char is in the charMap
    //if not, store the char 
    //if the letter exist in the charMap, return the letter

    let charMap = new Map();

    for (const char of s) {
        //stop right away if the char exist in the charMap bc that means it is repeating
        if(charMap.has(char)) {
            return char
        }
        //otherwise continue to store the char in the charMap
        else {
            charMap.set(char)
        }
    }
}

console.log(repeatedCharacter("abccbaacz")) //c