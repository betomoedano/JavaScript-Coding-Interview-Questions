/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */

// Time O(nm) | Space O(nm) - where n is the number of nodes and m the number of edges

var validPath = function (n, edges, start, end) {
  if (!edges) return false; // if there aren't edges return false

  const graph = {};
  const visited = new Array(n); // to keep track of visited vertices
  const stack = [start];

  createGraph(edges, graph); // build graph so we can start exploring

  visited[start] = true; // mark the start vertex as visited

  while (stack.length > 0) {
    // as long as we have vertices to explore
    const currVertex = stack.pop(); // pop a vertex from the stack

    if (currVertex === end) return true; // if currVertex is equal to de end it means there is a path so we return true
    visited[currVertex] = true; // otherwise mark the vertex as visited and add the currVertex's edges to the stack

    for (const vertex of graph[currVertex]) {
      if (visited[vertex]) continue; // if we already visited this vertex skip it
      stack.push(vertex); // otherwise add it to the stack
    }
  }

  return false; // if we reach this point it means we didn't find a path so we return false
};

function createGraph(edges, graph) {
  for (const [vertex, edge] of edges) {
    if (!graph.hasOwnProperty(vertex)) {
      graph[vertex] = [edge];
    } else {
      graph[vertex].push(edge);
    }

    // because is a bi-directional graph
    if (!graph.hasOwnProperty(edge)) {
      graph[edge] = [vertex];
    } else {
      graph[edge].push(vertex);
    }
  }
}
