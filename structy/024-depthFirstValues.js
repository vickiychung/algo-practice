//iterative solution

// const depthFirstValues = (root) => {
//   if (!root) return [];
  
//   let stack = [root];
//   let output = [];

//   while (stack.length !== 0) {
//     let curr = stack.pop();
//     output.push(curr.val);
//     if (curr.right) stack.push(curr.right);
//     if (curr.left) stack.push(curr.left);
//   }
  
//   return output;
// };

//recursive solution

const depthFirstValues = (root) => {
  if (!root) return [];
  
  const leftValues = depthFirstValues(root.left);
  const rightValues = depthFirstValues(root.right);
  
  return [root.val, ...leftValues, ...rightValues];
};