function sumOfUnique(nums) {
  //if the first index of the element in the array === the last index of the element in the array, then it only occurs once and therefore is unique
  let uniqueElements = nums.filter(
    (el) => nums.indexOf(el) === nums.lastIndexOf(el)
  );

  //use reduce method to add to the sum
  let sum = uniqueElements.reduce((a, s) => a + s, 0);

  return sum;
}

console.log(sumOfUnique([1, 2, 3, 2])); //4
console.log(sumOfUnique([1, 1, 1, 1])); //0
console.log(sumOfUnique([1, 2, 3, 4, 5])); //15

/*
one-liner
return nums
      .filter((el, idx, arr) => nums.indexOf(el) === nums.lastIndexOf(el))
      .reduce((a, s) => a + s, 0);
*/
