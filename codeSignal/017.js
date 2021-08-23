function arrayChange(inputArray) {
  let moves = 0;
  
  for (let i = 1; i < inputArray.length; i++) {
    let curr = inputArray[i];
    let prev = inputArray[i - 1];
    
    while (curr <= prev) {
      curr += 1;
      moves += 1;
    }
    
    inputArray[i] = curr;
  }
  
  return moves;
}