//Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  // Step 1: Count the frequency of each element
  const frequencyMap = new Map();
  for (const num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  // Step 2: Create buckets to group elements by frequency
  const buckets = Array(nums.length + 1)
    .fill(null)
    .map(() => []);
  for (const [num, freq] of frequencyMap) {
    buckets[freq].push(num);
  }

  // Step 3: Collect the k most frequent elements
  const result = [];
  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    if (buckets[i].length > 0) {
      result.push(...buckets[i]);
    }
  }

  return result.slice(0, k); // Return only k elements
};

//Time: O(n)
//Space: O(n)

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); //[ 1,2 ]
console.log(topKFrequent([1], 1)); //[ 1 ]
