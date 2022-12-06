/**
 * Dijkstra's Algorithm
 *
 * The first part of this file is a full implementation
 * using a priority queue and graph class
 */

class Graph {
  constructor() {
    this.nodes = [];
    this.adjacencyList = {};
  }

  addNode(node) {
    this.nodes.push(node);
    this.adjacencyList[node] = [];
  }

  addEdge(from, to, weight) {
    this.adjacencyList[from].push({ node: to, weight });
    this.adjacencyList[to].push({ node: from, weight });
  }
}

let map = new Graph();
map.addNode("Fullstack");
map.addNode("Starbucks");
map.addNode("Dig Inn");
map.addEdge("Fullstack", "Starbucks", 5);
map.addEdge("Dig Inn", "Starbucks", 3);
map.addEdge("Fullstack", "Dig Inn", 7);
console.table(map);
console.log(map.adjacencyList);

function dijkstrasAlgorithm(start, edges) {
  const numberOfVertices = edges.length;

  const minDistances = [];
  for (let i = 0; i < numberOfVertices; i++) {
    minDistances.push(Infinity);
  }
  minDistances[start] = 0;

  const visited = new Set();

  while (visited.size != numberOfVertices) {
    const [vertex, currentMinDistance] = getVertexWithMinDistance(
      minDistances,
      visited
    );

    if (currentMinDistance === Infinity) {
      break;
    }

    visited.add(vertex);

    for (const edge of edges[vertex]) {
      const [destination, distanceToDestination] = edge;

      if (visited.has(destination)) {
        continue;
      }

      const newPathDistance = currentMinDistance + distanceToDestination;
      const currentDestinationDistance = minDistances[destination];
      if (newPathDistance < currentDestinationDistance) {
        minDistances[destination] = newPathDistance;
      }
    }
  }
  return minDistances.map((x) => (x === Infinity ? -1 : x));
}

function getVertexWithMinDistance(distances, visited) {
  let currentMinDistance = Infinity;
  let vertex = -1;

  for (const [vertexIdx, distance] of distances.entries()) {
    if (visited.has(vertexIdx)) {
      continue;
    }
    if (distance <= currentMinDistance) {
      vertex = vertexIdx;
      currentMinDistance = distance;
    }
  }
  return [vertex, currentMinDistance];
}
