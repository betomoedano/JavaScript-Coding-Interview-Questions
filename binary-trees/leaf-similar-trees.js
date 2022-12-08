/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */

// Time O(n + m)  where n is the number of nodes of the firs tree and m nodes of second tree
// Space O(n + m)
var leafSimilar = function (root1, root2) {
  const leafsOne = [];
  const leafsTwo = [];

  traverseHelper(root1, leafsOne);
  traverseHelper(root2, leafsTwo);

  if (leafsOne.length !== leafsTwo.length) return false;

  for (let i = 0; i < leafsOne.length; i++) {
    if (leafsOne !== null && leafsTwo !== null) {
      if (leafsOne[i] !== leafsTwo[i]) return false;
    } else {
      return false;
    }
  }
  return true;
};

function traverseHelper(node, array) {
  if (node === null) return;
  if (node.left === null && node.right === null) array.push(node.val);
  traverseHelper(node.left, array);
  traverseHelper(node.right, array);
}
