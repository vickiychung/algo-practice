//iterative approach

const breadthFirstValues = (root) => {
  if (!root) return [];
  
  let output = [];
  let queue = [root];
  
  while (queue.length !== 0) {
    let curr = queue.shift();
    output.push(curr.val);
    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }
  
  return output;
};