const connectedComponentsCount = (graph) => {
  let count = 0;
  let visited = new Set();
 
  for (let node in graph) {
    if (traverse(graph, node, visited)) count += 1;
  }
  
 console.log(visited);
  return count;
};

const traverse = (graph, src, visited) => {
  if (visited.has(String(src))) return false;
  
  visited.add(String(src));
  
  graph[src].forEach(node => {
    traverse(graph, node, visited);
  })
  
  return true;
};