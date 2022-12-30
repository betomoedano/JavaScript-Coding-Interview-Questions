/**
 * Given a binary tree design an algorithm wich creates
 * a linked list of all the nodes at each depth (e.g., if you
 * have a tree with depth D, you'll have D linked lists).
 */

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
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const tree = new Node(1);
tree.right = new Node(3);
tree.left = new Node(2);
tree.left.left = new Node(4);
tree.left.right = new Node(5);
tree.right.right = new Node(7);
tree.right.left = new Node(6);
