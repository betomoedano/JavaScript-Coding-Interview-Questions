/**
 * Given a directed graph and two nodes S and E.
 * Design an algorithm to find out whether there is a route from S to E
 */

function routeBetweenNodes(graph, origin, destination) {
  const stack = [origin];

  while (stack.length > 0) {
    const currentNode = stack.pop();

    for (const node of graph[currentNode]) {
      if (node === destination) return true;
      if (node === currentNode) continue;
      stack.push(node);
    }
  }
  return false;
}

module.exports = routeBetweenNodes;
