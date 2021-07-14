const maxPathSum = (root) => {
  if (!root) return -Infinity;
  if (!root.left && !root.right) return root.val;
  
  let leftSum = maxPathSum(root.left);
  let rightSum = maxPathSum(root.right);

  return root.val + Math.max(leftSum, rightSum);
};