const treeMinValue = (root) => {
  let queue = [root];
  let min = root.val;
  
  while (queue.length !== 0) {
    let curr = queue.shift();
    if (curr.val < min) min = curr.val;
    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }
  
  return min;
};