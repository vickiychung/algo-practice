const largestComponent = (graph) => {
  if (graph === {}) return 0;
  
  let visited = new Set();
  let max = 0;
  
  for (let node in graph) {
    let traversed = traverse(graph, node, visited);
    if (traversed > max) max = traversed;
  }
  
  return max;
};

const traverse = (graph, src, visited) => {
  if (visited.has(String(src))) return 0;
  
  visited.add(String(src));
  let size = 1;
  
  for (let neighbor of graph[src]) {
    size += traverse(graph, neighbor, visited);
  }
  
  return size;
}