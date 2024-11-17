//Given an array of strings strs, group the anagrams together. You can return the answer in any order.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    const map = new Map()
    
    for (const str of strs) {
        // sort the string to use as a key
        const sortedStr = str.split('').sort().join('')

        // store in map with the sort as the key, value is the array or collection of anagram 
        // {"aet": ["eat", "tea", "ate"], "abt": ["bat"], ""}
        // if the key (sorted string) doesn't exist in the map, create a new entry
        if (!map.has(sortedStr)) {
            map.set(sortedStr, [])
        }

        // add the original string to the group
        map.get(sortedStr).push(str)
    }

    // return the values of the map as an array of grouped anagrams
    return Array.from(map.values())
}

//Time: O(n x nlogn)
//Space: O(n x n)

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])) //[["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams([""])) // [[""]]
