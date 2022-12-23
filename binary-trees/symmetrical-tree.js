// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Time O(n)
// Space O(h) - where h is the height of the tree
function symmetricalTree(tree) {
  if (tree === null) return false;
  if (tree.left === null && tree.right === null) return true;

  const leftStack = [tree.left];
  const rightStack = [tree.right];

  while (leftStack.length > 0) {
    const left = leftStack.pop();
    const right = rightStack.pop();
    if (left === null && right === null) continue;
    if (left === null && right !== null) return false;
    if (left !== null && right === null) return false;
    if (left.value !== right.value) return false;
    leftStack.push(left.left);
    rightStack.push(right.right);
    leftStack.push(left.right);
    rightStack.push(right.left);
  }
  return true;
}
