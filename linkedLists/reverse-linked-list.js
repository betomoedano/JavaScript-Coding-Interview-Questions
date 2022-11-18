class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// MY SOLUTION
// Time O(n) - where n is the total of nodes
// Space O(1)
function reverseLinkedList(head) {
  if (head.next === null) return head;
  let prevNode = null;
  let currentNode = head;
  let nextNode = head.next;

  while (currentNode !== null) {
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
    if (nextNode.next === null) {
      currentNode.next = prevNode;
      break;
    } else {
      nextNode = nextNode.next;
    }
  }
  return currentNode;
}
