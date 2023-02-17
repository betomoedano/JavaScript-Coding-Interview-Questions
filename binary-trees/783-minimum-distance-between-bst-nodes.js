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
 * Time O(n) where n is the number of nodes
 * Space O(h) where h is the hight of the tree
 */

// We create a class to keep track of the minimum height difference and the previous node
class TreeNodeInfo {
  constructor(minHeightDiff, prevNode) {
    this.minHeightDiff = minHeightDiff;
    this.prevNode = prevNode;
  }
}

// This function returns the minimum height difference of a binary search tree
function getMinimumHeightDiff(root) {
  const treeNodeInfo = new TreeNodeInfo(Infinity, null); // Initialize minimum height difference to be infinity and previous node to be null
  traverseInOrder(root, treeNodeInfo); // Start traversing the tree in order
  return treeNodeInfo.minHeightDiff; // Return minimum height difference after traversing the tree
}

// This function traverses a binary search tree in order and updates the minimum height difference and previous node information
function traverseInOrder(node, treeNodeInfo) {
  if (node === null) return; // Base case

  traverseInOrder(node.left, treeNodeInfo); // Traverse left subtree

  if (treeNodeInfo.prevNode !== null) {
    // If previous node is not null, update the minimum height difference
    treeNodeInfo.minHeightDiff = Math.min(
      treeNodeInfo.minHeightDiff,
      node.val - treeNodeInfo.prevNode.val
    );
  }

  treeNodeInfo.prevNode = node; // Update previous node to be the current node

  traverseInOrder(node.right, treeNodeInfo); // Traverse right subtree
}
