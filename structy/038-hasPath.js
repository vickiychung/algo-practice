//DFS
const hasPath = (graph, src, dst) => {
  if (graph[src].length === 0) return false;
  
  let stack = [graph[src]];
  
  while (stack.length !== 0) {
    let curr = stack.pop();
    let currValues = Object.values(curr);
    if (currValues.includes(dst)) return true;
    currValues.forEach(val => stack.push(graph[val]));
  }
  
  return false;
};

//BFS
const hasPath = (graph, src, dst) => {
  if (graph[src].length === 0) return false;
  
  let queue = [graph[src]];
  
  while (queue.length !== 0) {
    let curr = queue.shift();
    let currValues = Object.values(curr);
    if (currValues.includes(dst)) return true;
    currValues.forEach(val => queue.push(graph[val]));
  }
  
  return false;
};