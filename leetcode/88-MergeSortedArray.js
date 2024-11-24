function merge(nums1, m, nums2, n) {
  // Pointers
  let mPointer = m - 1; // Pointer to the last valid element in nums1
  let nPointer = n - 1; // Pointer to the last element in nums2
  let rightPointer = m + n - 1; // Pointer to the end of nums1

  // Merge from the end to the beginning
  while (nPointer >= 0) {
    if (mPointer >= 0 && nums1[mPointer] > nums2[nPointer]) {
      nums1[rightPointer] = nums1[mPointer]; // Place the larger value at the end
      mPointer--;
    } else {
      nums1[rightPointer] = nums2[nPointer]; // Place the larger value at the end
      nPointer--;
    }
    rightPointer--; // Move the pointer in nums1
  }

  return nums1;
}

//Time: O(m+n)
//Space: O(1)

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); //[1, 2, 2, 3, 5, 6]
