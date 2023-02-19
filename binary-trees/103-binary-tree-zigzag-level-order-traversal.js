// Approach
// The zigzagLevelOrder function takes the root node of the binary tree as input and returns an array of arrays representing the zigzag level order traversal of the tree nodes' values.

// The function first checks if the root node is null and returns an empty array if it is. Otherwise, it initializes the result array to store the traversal results, sets the level variable to 0, and initializes the queue array with the root node.

// The function then enters a loop that processes each level of the tree. Within the loop, the function first gets the size of the current level and initializes an empty levelValues array to store the values of the nodes in the level.

// The function then enters a nested loop that processes each node in the level. Within the nested loop, the function dequeues the next node from the queue, adds its value to the levelValues array, and enqueues its child nodes (if any) onto the queue.

// After processing all the nodes in the level, the function checks the level variable to determine whether to reverse the levelValues array or not. If the level variable is odd (i.e., the level is even-numbered), the function reverses the levelValues array.

// Finally, the function adds the levelValues array to the result array and increments the level variable. The function repeats the loop until the queue is empty.

// Once the loop has completed, the function returns the result array containing the zigzag level order traversal of the tree nodes' values.

// Complexity
// The time complexity of the zigzagLevelOrder function is O(n), where n is the number of nodes in the binary tree. This is because the function needs to visit each node in the tree once to generate the zigzag level order traversal.

// The space complexity of the function is O(w), where w is the maximum width of the binary tree (i.e., the maximum number of nodes in any level of the tree). This is because the function uses a queue to store the nodes of each level as it traverses the tree. The size of the queue is equal to the number of nodes in the widest level of the tree. In the worst case, when the tree is a complete binary tree, the maximum width is (2^(h+1))-1, where h is the height of the tree. Therefore, the space complexity is O(2^h), which is exponential in the height of the tree. However, in most cases, the tree will not be a complete binary tree, and the space complexity will be much lower than the worst-case scenario.

// Code
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
 * @return {number[][]}
 */

// Time O(n)
// Space O(w)
function zigzagLevelOrder(root) {
  if (!root) return []; // Handle empty tree

  const result = [];
  let level = 0;
  let queue = [root];

  while (queue.length) {
    const levelSize = queue.length;
    const levelValues = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();

      // Add node value to levelValues array
      levelValues.push(node.val);

      // Add child nodes to queue
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    // Alternate between reversing and not reversing the levelValues array
    if (level % 2 === 1) levelValues.reverse();
    result.push(levelValues);

    level++;
  }

  return result;
}
