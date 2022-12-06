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

  findPathWithDijkstra(startNode, endNode) {
    let times = {};
    let backtrace = {};
    let pq = new PriorityQueue();

    times[startNode] = 0;

    this.nodes.forEach((node) => {
      if (node !== startNode) {
        times[node] = Infinity;
      }
    });
    //      [startingNode, Weight]
    pq.enqueue([startNode, 0]);

    while (!pq.isEmpty()) {
      let shortestStep = pq.dequeue();
      let currentNode = shortestStep[0];

      this.adjacencyList[currentNode].forEach((neighbor) => {
        let time = times[currentNode] + neighbor.weight;
        if (time < times[neighbor.node]) {
          times[neighbor.node] = time;
          backtrace[neighbor.node] = currentNode;
          pq.enqueue([neighbor.node, time]);
        }
      });
    }

    let path = [endNode];
    let lastStep = endNode;

    while (lastStep !== startNode) {
      path.unshift(backtrace[lastStep]);
      lastStep = backtrace[lastStep];
    }

    return `Path is ${path} and time is ${times[endNode]}`;
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

class PriorityQueue {
  constructor() {
    this.collection = [];
  }

  // Time O(n)
  enqueue(element) {
    const [value, weight] = element;
    if (this.isEmpty()) {
      this.collection.push(element);
    } else {
      let added = false;
      for (let i = 1; i <= this.collection; i++) {
        const currentWeight = this.collection[i - 1][1];
        if (weight < currentWeight) {
          this.collection.splice(i - 1, 0, element);
          added = true;
          break;
        }
      }
      // if we did't add the element, means that the element
      // has a greater weight
      if (!added) {
        this.collection.push(element);
      }
    }
  }
  dequeue() {
    return this.collection.shift();
  }

  isEmpty() {
    return this.collection.length === 0;
  }
}
///////////////////////////////////////////

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
