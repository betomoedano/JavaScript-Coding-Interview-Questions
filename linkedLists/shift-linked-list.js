// Write a function that takes in the head of a Singly Linked List and an integer
// , shifts the list in place (i.e., doesn't create a brand new
// list) by k positions, and returns its new head.

// Shifting a Linked List means moving its nodes forward or backward and wrapping
// them around the list where appropriate. For example, shifting a Linked List
// forward by one position would make its tail become the new head of the linked
// list.

// Whether nodes are moved forward or backward is determined by whether

// Time O(n)
// Space O(1)
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function shiftLinkedList(head, k) {
  if (k === 0) return head;

  let listLenght = 1;
  let listTail = head;

  while (listTail.next !== null) {
    listTail = listTail.next;
    listLenght++;
  }

  let offset = Math.abs(k) % listLenght;
  if (offset === 0) return head;
  let newTailPosition = k > 0 ? listLenght - offset : offset;
  let newTail = head;

  for (let i = 1; i < newTailPosition; i++) {
    newTail = newTail.next;
  }

  let newHead = newTail.next;
  newTail.next = null;
  listTail.next = head;
  return newHead;
}
