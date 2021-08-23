function matrixElementsSum(matrix) {
  let hauntedCol = [];
  let sum = 0;
  
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      let curr = matrix[r][c];
      
      if (curr === 0) {
        hauntedCol.push(c);
      } else if (curr !== 0 && !hauntedCol.includes(c)) {
        sum += curr;
      }
    }
  }
  
  return sum;
}