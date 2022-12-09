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

// Time O(n) where n is the number of nodes
// Space O(n)
var maxAncestorDiff = function (root) {
  if (root === null) return;
  return helper(root, root.val, root.val);
};

function helper(node, currMax, currMin) {
  if (node === null) {
    return currMax - currMin;
  } else {
    currMax = Math.max(currMax, node.val);
    currMin = Math.min(currMin, node.val);
    const left = helper(node.left, currMax, currMin);
    const right = helper(node.right, currMax, currMin);
    return Math.max(left, right);
  }
}
