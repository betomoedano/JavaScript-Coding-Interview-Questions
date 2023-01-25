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

// O(n) time
// O(n) space
function findKthHelper(tree, array) {
  if (tree === null) return;
  findKthHelper(tree.left, array);
  array.push(tree.value);
  findKthHelper(tree.right, array);
  return array;
}

////////////////////////////
// solution 2
///////////////////////////

class TreeInfo {
  constructor(numberOfNodesVisited, latestVisitedValue) {
    this.numberOfNodesVisited = numberOfNodesVisited;
    this.latestVisitedValue = latestVisitedValue;
  }
}

// O(h + k) time | O(h) space - where h is the height of the tree and k is the input parameter
function findKthLargestValueInBst(tree, k) {
  const treeInfo = new TreeInfo(0, -1);
  reverseInOrderTraverse(tree, k, treeInfo);
  return treeInfo.latestVisitedNodeValue;
}

function reverseInOrderTraverse(node, k, treeInfo) {
  if (node === null || treeInfo.numberOfNodesVisited >= k) return;
  reverseInOrderTraverse(node.right, k, treeInfo);
  if (treeInfo.numberOfNodesVisited < k) {
    treeInfo.numberOfNodesVisited++;
    treeInfo.latestVisitedNodeValue = node.value;
    reverseInOrderTraverse(node.left, k, treeInfo);
  }
}
