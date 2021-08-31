// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function removeKFromList(l, k) {
  let head = l;
  let curr = l;
  let prev;
  
  while (curr) {
    let next = curr.next;
    
    if (curr.value === k) {
      if (prev) {
        prev.next = next;
        curr = next;
      } else {
        curr.next = null;
        curr = next;
        head = curr;
      }
    } else {
      prev = curr;
      curr = next;
    }
  }
  
  
  return head;
}