var flatten = function(head) {
  if (!head) return head;
  
  let stack = [];
  let curr = head;
  
  while (curr) {
    if (curr.child) {
      if (curr.next) stack.push(curr.next);
      curr.child.prev = curr;
      curr.next = curr.child;
      curr.child = null;
    } else if (!curr.next && stack.length !== 0) {
      curr.next = stack.pop();
      curr.next.prev = curr;
    }
    curr = curr.next;
  }
  
  return head;
};