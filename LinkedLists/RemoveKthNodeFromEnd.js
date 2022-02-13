// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeKthNodeFromEnd(head, k) {
  // Write your code here.
  //use two pointers when second pointer reaches null
  //you have the kth node

  let first = head;
  let second = head;
  let counter = 1;
  while (counter <= k) {
    second = second.next;
    counter++;
  }
  // if second is already null then k points to head
  if (second === null) {
    head.value = head.next.value;
    head.next = head.next.next;
    return;
  }

  while (second.next !== null) {
    first = first.next;
    second = second.next;
  }
  first.next = first.next.next;
}
