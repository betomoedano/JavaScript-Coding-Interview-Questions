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
