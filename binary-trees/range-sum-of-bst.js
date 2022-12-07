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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

class SumInfo {
  constructor() {
    this.sum = 0;
  }
}
var rangeSumBST = function (root, low, high) {
  const sum = new SumInfo();
  getSumHelper(root, low, high, sum);
  return sum.sum;
};

function getSumHelper(node, low, high, sumInfo) {
  if (node === null) return;

  if (node.val >= low && node.val <= high) {
    sumInfo.sum += node.val;
  }
  getSumHelper(node.left, low, high, sumInfo);
  getSumHelper(node.right, low, high, sumInfo);
}
