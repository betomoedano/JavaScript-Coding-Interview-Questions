// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// time O(n) | space O(1)
function removeKthNodeFromEnd(head, k) {
  let firstNode = head;
  let secondNode = head;
  let counter = 1;

  while(counter <= k) {
    secondNode = secondNode.next;
    counter++;
  }

  //check if we are in the last node
  if(secondNode === null) {
    head.value = head.next.value;
    head.next = head.next.next;
    return;
  }

  while(secondNode.next !== null) {
    secondNode = secondNode.next
    firstNode = firstNode.next;
  }

  firstNode.next = firstNode.next.next;
}