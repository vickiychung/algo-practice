// DFS recursive
// const treeSum = (root) => {
//   if (!root) return 0;
  
//   let sum = root.val;
//   sum += treeSum(root.left) + treeSum(root.right);
  
//   return sum;
// };

// BFS
const treeSum = (root) => {
  if (!root) return 0;
  
  let sum = 0;
  let queue = [root];
  
  while (queue.length !== 0) {
    let curr = queue.shift();
    sum += curr.val;
    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }
  
  return sum;
};