//Given two strings s and t, return true if t is an anagram of s, and false otherwise.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    //s is a string
    //t is a string
    //return true if t and s contain the same characters, false if it doesnt
    //example
    //console.log(isAnagram("rat", "car"), "false")

    //possible solution
    //hash map to store frequencies of char
    //loop through s and count freq
    //loop through t and decrement count if char exists
    //return true if the count for each freq is 0

    //edge case check 
    if (s.length !== t.length) return false

    const charCount = {}

    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;  
        // console.log(charCount)
        // { a: 1 }
        // { a: 1, n: 1 }
        // { a: 2, n: 1 }
        // { a: 2, n: 1, g: 1 }
        // { a: 2, n: 1, g: 1, r: 1 }
        // { a: 3, n: 1, g: 1, r: 1 }
        // { a: 3, n: 1, g: 1, r: 1, m: 1 }
    }
    for (let char of t) {
        if (!charCount[char]) return false;
        charCount[char]--;
        //console.log(charCount)
        // { a: 3, n: 0, g: 1, r: 1, m: 1 }
        // { a: 2, n: 0, g: 1, r: 1, m: 1 }
        // { a: 2, n: 0, g: 0, r: 1, m: 1 }
        // { a: 1, n: 0, g: 0, r: 1, m: 1 }
        // { a: 1, n: 0, g: 0, r: 0, m: 1 }
        // { a: 0, n: 0, g: 0, r: 0, m: 1 }
        // { a: 0, n: 0, g: 0, r: 0, m: 0 }
    }
        
    //console.log(charCount) -> { a: 0, n: 0, g: 0, r: 0, m: 0 }
    return Object.values(charCount).every(count => count === 0)
};

//Time: O(n)
//Space: O(1)

console.log(isAnagram("anagram", "nagaram")) //true
console.log(isAnagram("rat", "car")) //false