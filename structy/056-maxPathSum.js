const maxPathSum = (grid, r = 0, c = 0, memo = {}) => {
  if (`${r},${c}` in memo) return memo[`${r},${c}`];
  if (r === grid.length - 1 && c === grid[0].length - 1) return grid[r][c];
  if (r > grid.length - 1 || c > grid[0].length - 1) return -Infinity;
  
  let down = maxPathSum(grid, r + 1, c, memo);
  let right = maxPathSum(grid, r, c + 1, memo);
  
  memo[`${r},${c}`] = grid[r][c] + Math.max(down, right);
  
  return memo[`${r},${c}`];
};