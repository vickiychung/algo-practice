// BFS approach
// const treeIncludes = (root, target) => {
//   if (!root || !target) return false;

//   let queue = [root];
  
//   while (queue.length !== 0) {
//     let curr = queue.shift();
//     if (curr.val === target) return true;
//     if (curr.left) queue.push(curr.left);
//     if (curr.right) queue.push(curr.right);
//   }
  
//   return false;
// };

// DFS recursive approach
const treeIncludes = (root, target) => {
  if (!root || !target) return false;
  if (root.val === target) return true;
  return treeIncludes(root.left, target) || treeIncludes(root.right, target);
};