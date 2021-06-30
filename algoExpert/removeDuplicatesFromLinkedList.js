function removeDuplicatesFromLinkedList(linkedList) {
  let prev = linkedList;
  
  while (prev.next) {
    let curr = prev.next;

    if (prev.value === curr.value) {
      prev.next = curr.next;
      curr = null;
    } else {
      prev = curr;
      curr = curr.next;
    }
  }

  return linkedList;
}

// class LinkedList {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }