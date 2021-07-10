const zipperLists = (head1, head2) => {
  let curr = head1; // a -> b
  let zipNext = head2; // x -> y
  let next;
  
  while (zipNext) {
    next = curr.next; // x -> y
    curr.next = zipNext; // x -> b
    zipNext = next; // x -> y
    curr = curr.next // x -> y
  }
 
  return head1;
};