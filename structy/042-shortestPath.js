const shortestPath = (edges, nodeA, nodeB) => {
  const graph = createGraph(edges);
  let visited = new Set();
  let queue = [[nodeA, 0]];
  
  while (queue.length !== 0) {
    let curr = queue.shift();
    let numEdge = curr[1] + 1;
    visited.add(curr[0]);
    
    if (graph[curr[0]].includes(nodeB)) return numEdge;
    
    graph[curr[0]].forEach(neighbor => {
      if (!visited.has(neighbor)) queue.push([neighbor, numEdge]);
    });
  }
  
  return -1;
};

const createGraph = (edges) => {
  let graph = {};
  
  for (let edge of edges) {
    const [a, b] = edge;
    
    if (!graph[a]) graph[a] = [];
    graph[a].push(b);
    
    if (!graph[b]) graph[b] = [];
    graph[b].push(a);
  }
  
  return graph;
}