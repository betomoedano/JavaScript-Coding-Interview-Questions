const LinkedList = require("../utils/LinkedList");
/**
 * Given a binary tree design an algorithm wich creates
 * a linked list of all the nodes at each depth (e.g., if you
 * have a tree with depth D, you'll have D linked lists).
 */

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
function listOfDepths(root) {
  const listOfLists = [];
  let list = null;
  let newNode = null;
  let queue = [];
  let nextQueue = [];
  let currentNode = root;

  queue.unshift(currentNode);

  while (queue.length > 0) {
    currentNode = queue.pop();
    if (currentNode === null) continue;
    newNode = new LinkedList(currentNode.value);
    newNode.next = list;
    list = newNode;
    if (currentNode.left !== null) {
      nextQueue.unshift(currentNode.left);
    }
    if (currentNode.rigth !== null) {
      nextQueue.unshift(currentNode.right);
    }
    if (queue.length === 0) {
      listOfLists.push(list);
      list = null;
      queue = nextQueue;
      nextQueue = [];
    }
  }
  return listOfLists;
}

// TEST
const tree = new Node(1);
tree.right = new Node(3);
tree.left = new Node(2);
tree.left.left = new Node(4);
tree.left.right = new Node(5);
tree.right.right = new Node(7);
tree.right.left = new Node(6);

console.log(listOfDepths(tree));
