/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

class TreeInfo {
  constructor(value) {
    this.height = value;
  }
}

// Time O(n) because we need to visit every node
// Space O(h) where h is the height of the tree, because we are using recursion at most we will have h calls in the call stack at the same time.

var maxDepth = function (root) {
  const treeInfo = new TreeInfo(0);
  getMaxHeight(root, treeInfo);
  return treeInfo.height;
};

function getMaxHeight(node, treeInfo, nodeDepth = 1) {
  if (node === null) {
    return;
  }
  if (nodeDepth > treeInfo.height) {
    treeInfo.height = nodeDepth;
  }
  getMaxHeight(node.left, treeInfo, nodeDepth + 1);
  getMaxHeight(node.right, treeInfo, nodeDepth + 1);
}
