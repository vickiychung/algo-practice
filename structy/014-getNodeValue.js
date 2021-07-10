const getNodeValue = (head, index) => {
  if (index === 0) return head.val;
  let curr = head;
  
  for (let i = 0; i < index; i++) {
    if (!curr) break;
    curr = curr.next;
  }
  
  if (curr) {
    return curr.val;
  } else {
    return null;
  }
};