// This is an input class. Do not edit.
class Node {
    constructor(value) {
      this.value = value;
      this.prev = null;
      this.next = null;
    }
  }
  
  // Feel free to add new properties and methods to the class.
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    setHead(node) {
      if (this.head === null) {
        this.head = node;
        this.tail = node;
        return;
      }
      this.insertBefore(this.head, node);
    }
  
    setTail(node) {
      if (this.tail === null) {
        this.setHead(node);
        return;
      }
      this.insertAfter(this.tail, node);
    }
  
    insertBefore(node, nodeToInsert) {
      if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
      this.remove(nodeToInsert);
      nodeToInsert.prev = node.prev;
      nodeToInsert.next = node;
  
      if (node === this.head) {
        this.head = nodeToInsert;
      } else {
        node.prev.next = nodeToInsert;
      }
      node.prev = nodeToInsert;
    }
  
    insertAfter(node, nodeToInsert) {
      if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
      this.remove(nodeToInsert);
      nodeToInsert.prev = node;
      nodeToInsert.next = node.next;
  
      if (node === this.tail) {
        this.tail = nodeToInsert;
      } else {
        node.next.prev = nodeToInsert;
      }
      node.next = nodeToInsert;
    }
  
    insertAtPosition(position, nodeToInsert) {
      if (position === 1) {
        this.setHead(nodeToInsert);
        return;
      }
      let currentNode = this.head;
      let currentPosition = 1;
  
      while (currentNode !== null && currentPosition++ !== position)
        currentNode = currentNode.next;
      if (currentNode !== null) {
        this.insertBefore(currentNode, nodeToInsert);
      } else {
        this.setTail(nodeToInsert);
      }
    }
  
    // O(n) time | O(1) space
    removeNodesWithValue(value) {
      let currentNode = this.head;
      while (currentNode !== null) {
        const nodeToRemove = currentNode;
        currentNode = currentNode.next;
        if (nodeToRemove.value === value) this.remove(nodeToRemove);
      }
    }
  
    // Time O(1) | Space O(1)
    remove(node) {
      if (node === this.head) this.head = this.head.next;
      if (node === this.tail) this.tail = this.tail.prev;
      this.removeBindings(node);
    }
  
    // Time O(n) where n is the number of nodes
    // Space O(1)
    containsNodeWithValue(value) {
      let node = this.head;
      while (node.next !== null && node.value !== value) {
        node = node.next;
      }
      return node.value === value;
    }
  
    removeBindings(node) {
      if (node.prev !== null) node.prev.next = node.next;
      if (node.next !== null) node.next.prev = node.prev;
      node.prev = null;
      node.next = null;
    }
  }
  