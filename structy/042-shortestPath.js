const shortestPath = (edges, nodeA, nodeB) => {
  const graph = createGraph(edges);
  let visited = new Set();
  let stack = [nodeA];
  let numEdge = 0;
  
  while (stack.length !== 0) {
    let curr = stack.pop();
    visited.add(curr);
    numEdge += 1;
    
    if (graph[curr].includes(nodeB)) return numEdge;
    
    graph[curr].forEach(node => {
      if (!visited.has(node)) stack.push(node);
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