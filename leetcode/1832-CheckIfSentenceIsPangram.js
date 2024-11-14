/*
A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.
*/

/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    //make input sentence all lowercase
    //also use replace to remove all non-alphabet characters and replace w an empty space
    //sentence = "TheQuickBrownFoxJumpsOverTheLazyDog" -> "thequickbrownfoxjumpsoverthelazydog"
    //now we need to check if entireAlphabet = "abcdefghijklmnopqrstuvwxyz" can be found 
    //we could use a hash map to count the frequencies of each char?
    //we could use Set which is a unique set and set that to entireAlphabet
    //then we can check the size, if it is 26 char then it is definitely has all the alphabet char

    let entireAlphabet = new Set(sentence.toLowerCase().replace(/[^a-z]/g, ''))

    return (entireAlphabet.size === 26)
}

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog")) //true
console.log(checkIfPangram("leetcode")) //false
