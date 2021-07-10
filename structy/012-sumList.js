const sumList = (head) => {
  
  let next = head.next;
  let sum = head.val;
  
  while (next) {
    sum += next.val;
    next = next.next;
  }
  
  return sum;
};