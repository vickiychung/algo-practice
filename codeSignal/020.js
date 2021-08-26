function arrayMaximalAdjacentDifference(inputArray) {
  let max = -Infinity;
  
  for (let i = 1; i < inputArray.length; i++) {
    let prev = inputArray[i - 1];
    let curr = inputArray[i];
    let diff = Math.abs(curr - prev);
    
    if (diff > max) max = diff;
  }
  
  return max;
}