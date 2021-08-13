const countPaths = (grid, r = 0, c = 0, memo = {}) => {
  if (r === grid.length || c === grid[0].length || grid[r][c] === "X") return 0;
  if (r === grid.length - 1 && c === grid[0].length - 1) return 1;
  if (`${r},${c}` in memo) return memo[`${r},${c}`];
  
  memo[`${r},${c}`] = countPaths(grid, r+1, c, memo) + countPaths(grid, r, c+1, memo);
  
  return memo[`${r},${c}`];
};
