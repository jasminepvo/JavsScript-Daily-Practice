//Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

/**
 * @param {number[]} arr
 * @return {boolean}
 */

function uniqueOccurrences(arr) {
  // Step 1: Count occurrences of each number using a Map
  const countMap = new Map();

  arr.forEach((num) => {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  });

  // Step 2: Get the list of occurrence counts
  const occurrences = Array.from(countMap.values());

  // Step 3: Use a Set to check if all occurrences are unique
  const uniqueOccurrencesSet = new Set(occurrences);

  // If the size of the Set is equal to the array length of occurrences, return true
  return uniqueOccurrencesSet.size === occurrences.length;
}

//Time: O(n)
//Space: O(n)

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3])); //true
console.log(uniqueOccurrences([1,2])) //false
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])); //true