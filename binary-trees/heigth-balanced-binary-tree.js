// HEIGHT BALANCED BINARY TREE
// Time O(n) time - where n is the total of nodes in the tree
// Space O(h) where h is the height of the tree - average case and the height will determine the number of recursive calls
// Space O(n) worse case

// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class TreeInfo {
  constructor(isBalanced, height) {
    this.isBalanced = isBalanced;
    this.height = height;
  }
}

function heightBalancedBinaryTree(tree) {
  return isBalancedHelper(tree).isBalanced;
}

function isBalancedHelper(node) {
  if (node === null) return new TreeInfo(true, -1);

  const leftInfo = isBalancedHelper(node.left);
  const rightInfo = isBalancedHelper(node.right);

  const isBalanced =
    leftInfo.isBalanced &&
    rightInfo.isBalanced &&
    Math.abs(leftInfo.height - rightInfo.height) <= 1;
  const height = 1 + Math.max(leftInfo.height, rightInfo.height);

  return new TreeInfo(isBalanced, height);
}

const root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.right = new BinaryTree(3);
root.left.left = new BinaryTree(4);
root.left.right = new BinaryTree(5);
root.right.right = new BinaryTree(6);
root.left.right.left = new BinaryTree(7);
root.left.right.right = new BinaryTree(8);

console.log(heightBalancedBinaryTree(root));
