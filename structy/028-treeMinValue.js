//BFS apprpoach
// const treeMinValue = (root) => {
//   let queue = [root];
//   let min = Infinity;
  
//   while (queue.length !== 0) {
//     let curr = queue.shift();
//     if (curr.val < min) min = curr.val;
//     if (curr.left) queue.push(curr.left);
//     if (curr.right) queue.push(curr.right);
//   }
  
//   return min;
// };

//DFS recursive
const treeMinValue = (root) => {
  if (!root) return Infinity;

  let leftMin = treeMinValue(root.left);
  let rightMin = treeMinValue(root.right);
  
  return Math.min(root.val, leftMin, rightMin);
};