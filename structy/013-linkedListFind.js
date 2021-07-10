const linkedListFind = (head, target) => {
  if (!head) return false;
  if (head.val === target) return true;
  
  let next = head.next;
  
  while (next) {
    if (next.val === target) {
      return true;
    } else {
      next = next.next;
    }
  }
  
  return false;
};