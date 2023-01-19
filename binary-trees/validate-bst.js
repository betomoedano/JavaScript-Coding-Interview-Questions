class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBst(tree) {
  return validateBstHelper(tree, -Infinity, Infinity);
}

// O(n) time | Space O(d) where d is the depth of the tree
function validateBstHelper(tree, minValue, maxValue) {
  if (tree === null) return true;
  if (tree.value < minValue || tree.value >= maxValue) return false;
  const leftIsValid = validateBstHelper(tree.left, minValue, tree.value);
  return leftIsValid && validateBstHelper(tree.right, tree.value, maxValue);
}

//
// SOLUTION 2
// This solution is iterative, same time complexity using DFS approach
// Time O(n) - where n is the number of nodes
// Space O(d) - where d is the depth of the tree
//
function validateBst(root) {
  if (root === null) return false;
  const stack = [root];
  root.min = -Infinity;
  root.max = Infinity;

  while (stack.length > 0) {
    const currentNode = stack.pop();
    if (
      currentNode.value < currentNode.min ||
      currentNode.value >= currentNode.max
    )
      return false;
    if (currentNode.left) {
      currentNode.left.min = currentNode.min;
      currentNode.left.max = currentNode.value;
      stack.push(currentNode.left);
    }
    if (currentNode.right) {
      stack.push(currentNode.right);
      currentNode.right.min = currentNode.value;
      currentNode.right.max = currentNode.max;
    }
  }
  return true;
}
