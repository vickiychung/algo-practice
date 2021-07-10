const linkedListValues = (head) => {
  if (!head) return [];
  
  let arr = [head.val];
  let next = head.next;
  
  while (next) {
    arr.push(next.val);
    next = next.next;
  }
  
  return arr;
};