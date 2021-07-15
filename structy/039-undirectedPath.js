// graph with DFS
// const undirectedPath = (edges, nodeA, nodeB) => {
//   let graph = {};
  
//   edges.forEach(edge => {
//     if (!graph[edge[0]]) graph[edge[0]] = [];
//     if (!graph[edge[1]]) graph[edge[1]] = [];
//     graph[edge[0]].push(edge[1]);
//     graph[edge[1]].push(edge[0]);
//   })
  
//   let visited = [];
//   let stack = [nodeA];
  
//   while (stack.length !== 0) {
//     let curr = stack.pop();
//     if (graph[curr].includes(nodeB)) return true;
//     visited.push(curr);
    
//     graph[curr].forEach(node => {
//       if (!visited.includes(node)) stack.push(node);
//     });
//   }
  
//   return false;
// };

// recursive with helper functions
const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = createGraph(edges);
  return hasPath(graph, nodeA, nodeB, new Set());
};

const hasPath = (graph, src, dst, visited) => {
  if (src === dst) return true;
  if (visited.has(src)) return false;
  
  visited.add(src);
  
  for (neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst, visited)) return true;
  }
  
  return false;
}

const createGraph = (edges) => {
  let graph = {};
  
  edges.forEach(edge => {
    const [a, b] = edge;
    if (!graph[a]) graph[a] = [];
    if (!graph[b]) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  });
  
  return graph;
}