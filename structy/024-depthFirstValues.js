//iterative solution

const depthFirstValues = (root) => {
  if (!root) return [];
  
  let stack = [root];
  let output = [];

  while (stack.length !== 0) {
    let curr = stack.pop();
    output.push(curr.val);
    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
  }
  
  return output;
};