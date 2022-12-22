/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */

class TreeInfo {
  constructor() {
    this.root = 0;
  }
}
var sumOfDistancesInTree = function (n, edges) {
  const adjList = createAdjacencyList(n, edges);
  const output = new Array(n).fill(0);
  const count = new Array(n).fill(1);
  const treeInfo = new TreeInfo();

  dfs(0, -1, 0, adjList, treeInfo, count);
  dfs2(0, -1, treeInfo.root, adjList, output, count, n);
  return output;
};

function dfs2(cur, parent, ans_p, adjList, output, count, n) {
  output[cur] = ans_p;
  for (const child of adjList[cur]) {
    if (child !== parent) {
      dfs2(
        child,
        cur,
        ans_p + (n - count[child]) - count[child],
        adjList,
        output,
        count,
        n
      );
    }
  }
}

function dfs(cur, parent, depth, adjList, treeInfo, count) {
  let sum = 1;

  for (const child of adjList[cur]) {
    if (child !== parent) {
      sum += dfs(child, cur, depth + 1, adjList, treeInfo, count);
      treeInfo.root += depth + 1;
    }
  }
  count[cur] = sum;
  return sum;
}

function createAdjacencyList(n, edges) {
  const list = {};
  for (let node = 0; node < n; node++) {
    list[node] = [];
  }

  for (const [start, end] of edges) {
    list[start].push(end);
    list[end].push(start);
  }
  return list;
}
