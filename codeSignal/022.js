function avoidObstacles(inputArray) {
  const sorted = inputArray.sort((a, b) => a - b);
  let min = 1;
  let curr = 0;
  let canAvoid = false;
  
  while (!canAvoid) {
    curr += min;
    
    if (sorted.includes(curr)) {
      curr = 0;
      min++;
    }
    
    if (curr > sorted[sorted.length - 1]) canAvoid = true;
  }
  
  return min;
}