function zeroMatrix(matrix) {
  let idx = [];

  for (let r = 0; r < matrix.length; r++) {

    if (matrix[r].includes(0)) {
      let newRow = [];

      matrix[r].forEach((num, i) => {
        if (num === 0) idx.push(i);
      })

      for (let i = 0; i < matrix[r].length; i++) {
        newRow.push(0);
      }

      matrix[r] = newRow;
    }

    // for (let c = 0; c < matrix[0].length; c++) {

    // }
  }

  idx.forEach(col => {
    matrix.forEach(row => {
      row[col] = 0;
    })
  })

  return matrix;
}

const matrix1 = [
  [1, 0, 3],
  [2, 3, 4],
  [3, 4, 5],
  [4, 5, 6]
]

const matrix2 = [
  [1, 0, 0],
  [2, 3, 4],
  [3, 4, 5],
  [4, 5, 6]
]

const matrix3 = [
  [1, 0, 0],
  [2, 3, 4],
  [3, 4, 5],
  [0, 5, 6]
]

console.log(zeroMatrix(matrix1));
console.log(zeroMatrix(matrix2));
console.log(zeroMatrix(matrix3));

// [
//   [0, 0, 0],
//   [2, 0, 4],
//   [3, 0, 5],
//   [4, 0, 6]
// ]

// [
//   [0, 0, 0],
//   [2, 0, 0],
//   [3, 0, 0],
//   [4, 0, 0]
// ]

// [
//   [0, 0, 0],
//   [0, 0, 0],
//   [0, 0, 0],
//   [0, 0, 0]
// ]