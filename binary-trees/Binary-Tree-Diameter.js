// Time O(n) - where n is the number of nodes
// Space O(h) - average case when the tree is balanced
// Space O(n) - worst case

// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class TreeInfo {
  constructor(diameter, heigth) {
    this.diameter = diameter;
    this.height = heigth;
  }
}

function binaryTreeDiameter(tree) {
  return getTreeInfoHelper(tree).diameter;
}

function getTreeInfoHelper(tree) {
  if (tree === null) return new TreeInfo(0, 0);

  const leftTreeInfo = getTreeInfoHelper(tree.left);
  const rightTreeInfo = getTreeInfoHelper(tree.right);

  // maxDiameterSoFar = max(leftNode.diameter and right.diameter);
  // largestPossiblePath = left.height + right.height
  // currentDiameter = max (longestPossiblePath and maxDiameterSoFar)
  // currentHeight = 1 + max (left.height, right.height);
  const maxDiameterSoFar = Math.max(
    leftTreeInfo.diameter,
    rightTreeInfo.diameter
  );
  const largestPossiblePath = leftTreeInfo.height + rightTreeInfo.height;
  const currentDiameter = Math.max(maxDiameterSoFar, largestPossiblePath);
  const currentHeight = 1 + Math.max(leftTreeInfo.height, rightTreeInfo.height);

  return new TreeInfo(currentDiameter, currentHeight);
}

const root = new BinaryTree(1);
root.left = new BinaryTree(3);
root.left.left = new BinaryTree(7);
root.left.left.left = new BinaryTree(8);
root.left.left.left.left = new BinaryTree(9);
root.left.right = new BinaryTree(4);
root.left.right.right = new BinaryTree(5);
root.left.right.right.right = new BinaryTree(6);
root.right = new BinaryTree(2);

console.log(binaryTreeDiameter(root));
