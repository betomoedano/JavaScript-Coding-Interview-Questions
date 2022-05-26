//CYCLE IN GRAPH
// time O(v + e) | O(v) space - where v is the number of vertices and e the number of edges in the graph

function cycleInGraph(edges) {
  const numberOfNodes = edges.length;
  const visitedVetices = new Array(numberOfNodes).fill(false);
  const inStack = new Array(numberOfNodes).fill(false);

  for (let node = 0; node < numberOfNodes; node++) {
    if (visitedVetices[node]) continue;
    const containsCycle = DFS(node, edges, visitedVetices, inStack);
    if (containsCycle) return true;
  }
  return false;
}

function DFS(node, edges, visitedVertices, inStack) {
  visitedVertices[node] = true;
  inStack[node] = true;

  const neighbors = edges[node];

  for (const neighbor of neighbors) {
    if (!visitedVertices[neighbor]) {
      const containsCycle = DFS(neighbor, edges, visitedVertices, inStack);
      if (containsCycle) return true;
    } else if (inStack[neighbor]) {
      return true;
    }
  }
  inStack[node] = false;
  return false;
}

const edges = [[1, 3], [2, 3, 4], [0], [], [2, 5], []];

console.log(cycleInGraph(edges));

