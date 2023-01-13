// You are given a tree (i.e. a connected, undirected graph that has no cycles) rooted at node 0 consisting of n nodes numbered from 0 to n - 1. The tree is represented by a 0-indexed array parent of size n, where parent[i] is the parent of node i. Since node 0 is the root, parent[0] == -1.

// You are also given a string s of length n, where s[i] is the character assigned to node i.

// Return the length of the longest path in the tree such that no pair of adjacent nodes on the path have the same character assigned to them.

// Example 1:

// Input: parent = [-1,0,0,1,1,2], s = "abacbe"
// Output: 3
// Explanation: The longest path where each two adjacent nodes have different characters in the tree is the path: 0 -> 1 -> 3. The length of this path is 3, so 3 is returned.
// It can be proven that there is no longer path that satisfies the conditions.
// Example 2:

// Input: parent = [-1,0,0,0], s = "aabc"
// Output: 3
// Explanation: The longest path where each two adjacent nodes have different characters is the path: 2 -> 0 -> 3. The length of this path is 3, so 3 is returned.

// Solution O(n) Time - Space O(n)
// This solution uses DFS
var longestPath = function (parent, s) {
  let n = parent.length;

  let children = new Array(n);
  for (let i = 0; i < n; i++) {
    children[i] = new Array();
  }
  for (let i = 1; i < n; i++) {
    children[parent[i]].push(i);
  }
  console.log(children);
  s = s.split("");
  let longestPath = 0;
  let dfs = function (node) {
    let longestLength = 0,
      longestLength2 = 0;
    for (let child of children[node]) {
      let lengthChild = dfs(child);
      if (s[node] == s[child]) continue;
      if (longestLength < lengthChild) {
        longestLength2 = longestLength;
        longestLength = lengthChild;
      } else if (longestLength2 < lengthChild) {
        longestLength2 = lengthChild;
      }
    }
    longestPath = Math.max(longestPath, longestLength + longestLength2 + 1);
    return longestLength + 1;
  };
  dfs(0);
  return longestPath;
};
