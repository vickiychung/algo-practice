// graph with DFS
const undirectedPath = (edges, nodeA, nodeB) => {
  let graph = {};
  
  edges.forEach(edge => {
    if (!graph[edge[0]]) graph[edge[0]] = [];
    if (!graph[edge[1]]) graph[edge[1]] = [];
    graph[edge[0]].push(edge[1]);
    graph[edge[1]].push(edge[0]);
  })
  
  let visited = [];
  let stack = [nodeA];
  
  while (stack.length !== 0) {
    let curr = stack.pop();
    if (graph[curr].includes(nodeB)) return true;
    visited.push(curr);
    
    graph[curr].forEach(node => {
      if (!visited.includes(node)) stack.push(node);
    });
  }
  
  return false;
};