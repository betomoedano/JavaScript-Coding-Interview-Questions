// 1443. Minimum Time to Collect All Apples in a Tree
// Medium
// 3.1K
// 268
// Companies
// Given an undirected tree consisting of n vertices numbered from 0 to n-1, which has some apples in their vertices. You spend 1 second to walk over one edge of the tree. Return the minimum time in seconds you have to spend to collect all apples in the tree, starting at vertex 0 and coming back to this vertex.

// The edges of the undirected tree are given in the array edges, where edges[i] = [ai, bi] means that exists an edge connecting the vertices ai and bi. Additionally, there is a boolean array hasApple, where hasApple[i] = true means that vertex i has an apple; otherwise, it does not have any apple.

// Example 1:

// Input: n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [false,false,true,false,true,true,false]
// Output: 8
// Explanation: The figure above represents the given tree where red vertices have an apple. One optimal path to collect all apples is shown by the green arrows.

// Intuition
// This solution uses depth-first search (DFS) to traverse the tree, starting from the root node (vertex 0). The DFS function takes in the current node and its parent, and returns the minimum time required to collect all apples.

// Approach
// First we check the case in which there are no apples in the tree using a for loop, as soon as we find an apple we break from the for loop. Otherwise, if we get to the last index, that means there are no apples so we return 0.
// If we have apples on the tree, we create an adjacency list to represent the tree, which is created using the edges array.
// The DFS function visits each node and its children and checks if the current node of any of its children have an apple. If so, it adds 2 seconds to the time required to visit this node. The function also keeps track of the parent node to avoid visiting the same node again.
// At the end the DFS function is called at the root node (vertex 0)
// Important notes:
// The reason we substract 2 seconds at the end of the DFS function, is because when we return at the root node, we don't need to spend any time to collect apples there, as we've already collected all the apples in the tree.
// Another way to think of it is that when the DFS returns from the last child to the root node, it is not necessary to go back to the root node, it is already there and it doesn't have an apple, so we don't need to spend 2 seconds.
// Complexity
// This solution has a time complexity of O(n) and a space complexity of O(n), where n is the number of vertices in the tree.

// Time complexity:
// O(n)O(n)O(n)

// Space complexity:
// O(n)O(n)O(n)

// Its worth noting that if there are no apples in the tree the space complexity would be: O(1)O(1)O(1) (best case)

// Code
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 * Time O(n)
 * Space O(n)
 */
function minTime(n, edges, hasApple) {
  // Create an adjacency list to represent the tree
  const adjList = new Array(n);
  for (let i = 0; i < n; i++) {
    adjList[i] = [];
  }
  for (const [a, b] of edges) {
    adjList[a].push(b);
    adjList[b].push(a);
  }

  // This checks if there are no apples in the tree return 0
  for (let i = 0; i < hasApple.length; i++) {
    if (hasApple[i]) break;
    if (i === hasApple.length - 1) return 0;
  }

  // Helper function to dfs through the tree
  function dfs(node, parent) {
    let time = 0;
    for (const child of adjList[node]) {
      if (child !== parent) {
        time += dfs(child, node);
      }
    }
    // If the current node has an apple or if one of its children has an apple, we need to visit this node
    if (hasApple[node] || time > 0) {
      time += 2;
    }
    return time;
  }

  // Start the dfs at the root node (vertex 0)
  return dfs(0, -1) - 2;
}
