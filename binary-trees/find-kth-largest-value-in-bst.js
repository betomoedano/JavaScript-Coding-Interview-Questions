// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findKthLargestValueInBst(tree, k) {
  const inOrderTraversal = findKthHelper(tree, (array = []));
  return inOrderTraversal[inOrderTraversal.length - k];
}

function findKthHelper(tree, array) {
  if (tree === null) return;
  findKthHelper(tree.left, array);
  array.push(tree.value);
  findKthHelper(tree.right, array);
  return array;
}
