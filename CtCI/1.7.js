function rotateMatrix(matrix) {
  let rotated = [];

  for (let c = 0; c < matrix.length; c++) {
    let row = [];

    for (let r = matrix.length - 1; r >= 0; r--) {
      row.push(matrix[r][c]);
    }

    rotated.push(row);
  }

  return rotated;
}

const matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

console.log(rotateMatrix(matrix1)); 

// [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3]
// ]
