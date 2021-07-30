const minimumIsland = (grid) => {
  let min = Infinity;
  let visited = new Set();
  
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      let islandSize = traverse(grid, r, c, visited);
      if (islandSize !== 0 && islandSize < min) min = islandSize;
    }
  }
  
  return min;
};

const traverse = (grid, r, c, visited) => {
  const rowBounds = 0 <= r && r < grid.length;
  const colBounds = 0 <= c && c < grid[0].length;
  if (!(rowBounds && colBounds)) return 0;
  
  if (grid[r][c] === 'W') return 0;
  if (visited.has(`${r},${c}`)) return 0;
  
  visited.add(`${r},${c}`);
  let size = 1;
  
  size += traverse(grid, r-1, c, visited, size);
  size += traverse(grid, r+1, c, visited, size);
  size += traverse(grid, r, c-1, visited, size);
  size += traverse(grid, r, c+1, visited, size);
  
  return size;
};