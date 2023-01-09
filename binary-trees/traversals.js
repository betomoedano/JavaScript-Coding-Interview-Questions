/**
 * @param {TreeNode} root
 * @return {number[]}
 * This algorithm works by iterating through the tree "in-place",
 * without using any additional stack or queue data structures.
 * This is what allows it to have a space complexity of O(1).
 * Time O(n)
 * Space O(1)
 * Preorder Traversal
 */
var preorderTraversal = function (root) {
  let current = root;
  let result = [];

  while (current) {
    if (!current.left) {
      result.push(current.val);
      current = current.right;
    } else {
      let predecessor = current.left;

      while (predecessor.right && predecessor.right !== current) {
        predecessor = predecessor.right;
      }

      if (!predecessor.right) {
        result.push(current.val);
        predecessor.right = current;
        current = current.left;
      } else {
        predecessor.right = null;
        current = current.right;
      }
    }
  }

  return result;
};
