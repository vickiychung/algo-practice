var exist = function(board, word) {
  let res = false;
  word = word.split('');
  
  board.forEach((row, r) => {
    row.forEach((char, c) => {
      if (char === word[0]) {
        let visited = new Set();
        if (traverse(r, c, board, word, 0, visited)) {
          console.log('here')
          res = true;
          return res;
        }
      }
    })
  }) 
  
  return res;
};

function traverse(r, c, board, word, charIdx, visited) {
  let res = false;
  let curr = word[charIdx];
  
  if (board[r][c] !== curr) return false;
  if (visited.has(`${r},${c}`)) return false;
  //   console.log(board[r][c], r, c, curr, charIdx, word.length - 1)
  // console.log(charIdx === word.length - 1)
  if (charIdx === word.length - 1) return true;
  
  visited.add(`${r},${c}`);
  
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
  ];
  
  dirs.forEach(dir => {
    const [dirX, dirY] = dir;
    let nextR = r + dirY;
    let nextC = c + dirX;
    
    if (0 <= nextR && nextR < board.length && 0 <= nextC && nextC < board[0].length) {
      if (traverse(nextR, nextC, board, word, charIdx + 1, visited)) {
        console.log('test')
        res = true;
        return res;
      }
    }
  })
  
  return res;
}