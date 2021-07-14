const treeSum = (root) => {
  if (!root) return 0;
  
  let sum = root.val;
  sum += treeSum(root.left) + treeSum(root.right);
  
  return sum;
};