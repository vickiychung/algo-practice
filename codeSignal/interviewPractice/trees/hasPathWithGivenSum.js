//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function hasPathWithGivenSum(t, s) {
  if (!t) return false;
  if (!t.left && !t.right) return t.value === s;
  
  if (t.left && hasPathWithGivenSum(t.left, s - t.value)) return true;
  if (t.right && hasPathWithGivenSum(t.right, s - t.value)) return true;
  
  return false;
}