function kthLargestElement(nums, k) {
  nums.sort((a, b) => b - a);
  
  for (let i = 0; i < nums.length; i++) {
    if (i === k - 1) return nums[i];
  }
}