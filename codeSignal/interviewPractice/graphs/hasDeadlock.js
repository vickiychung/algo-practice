function hasDeadlock(connections) {
  let visited = [];
  
  const hasCycle = idx => {
    if (idx in visited) return visited[idx];
    
    visited[idx] = true;
    return visited[idx] = connections[idx].some(hasCycle);
  }
  
  return connections.some((node, idx) => hasCycle(idx));
}