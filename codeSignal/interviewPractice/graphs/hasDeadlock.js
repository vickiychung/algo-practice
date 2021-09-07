function hasDeadlock(connections) {
  let visited = [];
  
  const hasCycle = node => {
    if (node in visited) return visited[node];
    
    visited[node] = true;
    return visited[node] = connections[node].some(hasCycle);
  }
  
  return connections.some((list, node) => hasCycle(node));
}