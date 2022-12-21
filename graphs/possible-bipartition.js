/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function (n, dislikes) {
  if (dislikes.length === 0) return true;
  const adjList = createAdjacencyList(dislikes);
  const colors = new Array(n).fill(-1);

  for (let i = 1; i <= n; i++) {
    if (colors[i - 1] === -1) {
      // for each pendind component, run BFS
      if (!bfs(i, adjList, colors)) {
        return false;
      }
    }
  }
  return true;
};

function bfs(source, adjList, colors) {
  const queue = [source];
  colors[source - 1] = 0;

  while (queue.length > 0) {
    const node = queue.shift();

    if (adjList[node] !== undefined) {
      for (const neighbor of adjList[node]) {
        // if there is a conflict return false.
        if (colors[neighbor - 1] === colors[node - 1]) {
          return false;
        }
        if (colors[neighbor - 1] === -1) {
          colors[neighbor - 1] = 1 - colors[node - 1];
          queue.unshift(neighbor);
        }
      }
    }
  }

  return true;
}

function createAdjacencyList(edges) {
  const list = {};

  for (const [node1, node2] of edges) {
    if (list.hasOwnProperty(node1)) {
      list[node1].push(node2);
    } else {
      list[node1] = [node2];
    }

    if (list.hasOwnProperty(node2)) {
      list[node2].push(node1);
    } else {
      list[node2] = [node1];
    }
  }

  return list;
}
