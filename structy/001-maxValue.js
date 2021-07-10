const maxValue = (nums) => {
  let max = nums[0];
  
  if (nums.length === 1) return max;
  
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) max = nums[i];
  }
  
  return max;
};