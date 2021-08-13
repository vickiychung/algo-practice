var maxSubArray = function(nums) {
  if (nums.length === 1) return nums[0];
  
  const subs = subArrays(nums);
  let max = -Infinity;
  
  subs.forEach(sub => {
    let subSum = sumArr(sub);
    if (subSum > max) max = subSum;
  })
  
  return max;
};

function subArrays(arr) {
  let output = [];
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      let subArr = arr.slice(i, j);
      output.push(subArr);
    }
  }
  
  return output;
}

function sumArr(arr) {
  let sum = 0;
  
  arr.forEach(num => {
    sum += num;
  })
  
  return sum;
}