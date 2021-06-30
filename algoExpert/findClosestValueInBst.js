function findClosestValueInBst(tree, target) {
	return helper(tree, target, tree.value);
}
function helper(tree, target, closest) {
	if (tree === null) return closest;

	if (Math.abs(tree.value - target) < Math.abs(closest - target)) closest = tree.value;

	if (tree.value > target) {
		return helper(tree.left, target, closest); 
	} else if (tree.value < target) {
		return helper(tree.right, target, closest);
	} else {
		return closest;
	}
}

// class BST {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }