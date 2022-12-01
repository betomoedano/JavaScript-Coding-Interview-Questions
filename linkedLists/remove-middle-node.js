class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const myLinkedList = new LinkedList("A");
myLinkedList.next = new LinkedList("B");
myLinkedList.next.next = new LinkedList("C");
myLinkedList.next.next.next = new LinkedList("D");
myLinkedList.next.next.next.next = new LinkedList("E");
myLinkedList.next.next.next.next.next = new LinkedList("F");

function removeMiddleNode(list, valueToRemove) {
  let currentNode = list;

  while (currentNode.next !== null) {
    if (currentNode.next.value === valueToRemove) {
      currentNode.next = currentNode.next.next;
    }
    currentNode = currentNode.next;
  }
  return list;
}

console.log(removeMiddleNode(myLinkedList, "B"));
// hey
