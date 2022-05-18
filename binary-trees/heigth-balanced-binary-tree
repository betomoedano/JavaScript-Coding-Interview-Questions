// HEIGHT BALANCED BINARY TREE

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class TreeInfo {
  constructor(isBalanced, heigth) {
    this.isBalanced = isBalanced;
    this.heigth = heigth;
  }
}

function heightBalancedBinaryTree(tree) {
  const treeInfo = getTreeInfo(tree);
  return treeInfo.isBalanced;
}

function getTreeInfo(node) {
  if (node === null) return new TreeInfo(true, -1);

  const leftSubtreeInfo = getTreeInfo(node.left);
  const rightSubtreeInfo = getTreeInfo(node.right);

  const isBalanced =
    leftSubtreeInfo.isBalanced &&
    rightSubtreeInfo.isBalanced &&
    Math.abs(leftSubtreeInfo.heigth - rightSubtreeInfo.heigth) <= 1;
  const heigth = Math.max(leftSubtreeInfo.heigth, rightSubtreeInfo.heigth) + 1;
  return new TreeInfo(isBalanced, heigth);
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
