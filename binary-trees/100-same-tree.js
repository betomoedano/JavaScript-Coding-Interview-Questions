/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 * Time O(N)
 * Space O(N)
 * Both solutions run in the same time-space complexity
 */

// iterative solution
var isSameTree = function (p, q) {
  const stack = [[p, q]];

  while (stack.length > 0) {
    const [p, q] = stack.pop();

    if (p === null && q === null) continue;
    if (p === null || q === null) return false;
    if (p.val !== q.val) return false;
    stack.push([p.left, q.left]);
    stack.push([p.right, q.right]);
  }
  return true;
};

// recursive solution
// function isSameHelper(tree1, tree2) {
//   if (tree1 === null && tree2 === null) return true;
//   if (tree2 === null || tree2 === null) return false;
//   if (tree1.val !== tree2.val) return false;

//   return isSameHelper(tree1.left, tree2.left) && isSameHelper(tree1.right, tree2.right);
// }
