const islandCount = (grid) => {
  let count = 0;
  let visited = new Set();
  
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (traverse(grid, row, col, visited)) count += 1;
    }
  }
  
  return count;
};

const traverse = (grid, row, col, visited) => {
  if (visited.has(`${row},${col}`)) return false;
  if (grid[row][col] === 'W') return false;
  
  visited.add(`${row},${col}`);
  
  if (row - 1 >= 0) traverse(grid, row - 1, col, visited);
  if (row + 1 < grid.length) traverse(grid, row + 1, col, visited);
  if (col - 1 >= 0) traverse(grid, row, col - 1, visited);
  if (col + 1 < grid[0].length) traverse(grid, row, col + 1, visited);
  
  return true;
}