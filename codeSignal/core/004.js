function solution(nCols, nRows, col, row) {
  let blockedCols = nCols - col + 1;
  let blockedRows = nRows - row;
  
  return blockedCols * blockedRows;
}