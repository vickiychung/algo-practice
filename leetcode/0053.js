var maxSubArray = function(nums) {
  if (nums.length === 1) return nums[0];
  
  let max = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    let prev = nums[i - 1];
    
    nums[i] = Math.max(prev + nums[i], nums[i]);
    max = Math.max(nums[i], max);
  }
  
  return max;
};