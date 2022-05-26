/////////////////////////////////////////////////////////////////////////////////////////////////
// FIND SUCCESSOR
// Time O(n) | Space O(n) where is the number of nodes

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.parent = null;
    this.right = null;
    this.left = null;
  }
}


const root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.left.parent = root;
root.right = new BinaryTree(3);
root.right.parent = root;
root.left.left = new BinaryTree(4);
root.left.left.parent = root.left;
root.left.right = new BinaryTree(5);
root.left.right.parent = root.left;
root.left.left.left = new BinaryTree(6);
root.left.left.left.parent = root.left.left;

const node = root.left;

function findSuccessor(tree, node) {
  const items = [];
  let resul = null;

  inOrderTraverse(tree, items);

  for (let i = 0; i < items.length; i++) {
    if (node.value === items[i]) {
      if (i + 1 < items.length) return items[i + 1];
    }
  }
  return resul;
}

function inOrderTraverse(node, items) {
  if (node !== null) {
    inOrderTraverse(node.left, items);
    // console.log(node.value);
    items.push(node.value);
    inOrderTraverse(node.right, items);
  }
  return items;
}

console.log(findSuccessor(root, node));

