class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  add(value) {
    let currentNode = this;

    while (currentNode !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = new LinkedList(value);
  }
}

module.exports = LinkedList;
