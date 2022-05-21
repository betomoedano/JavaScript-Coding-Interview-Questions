//NUMBER OF WAYS TO TRAVERSE GRAPH

// O(2^(n+m)) time
// O(n + m) space
// using recursivity. Bad time complexity

// function numberOfWaysToTraverseGraph(width, height) {
//   if (width === 1 || height === 1) return 1;
//   return (
//     numberOfWaysToTraverseGraph(width - 1, height) +
//     numberOfWaysToTraverseGraph(width, height - 1)
//   );
// }

// O(n m) time
// O(n m) space

function numberOfWaysToTraverseGraph(width, height) {
  const graph = [];
  for (let row = 0; row < height; row++) {
    const rowToInsert = [];
    for (let col = 0; col < width; col++) {
      rowToInsert.push(col);
    }
    rowToInsert[0] = 1;
    graph.push(rowToInsert);
  }
  for (let i = 0; i < graph[0].length; i++) {
    graph[0][i] = 1;
  }

  for (let row = 1; row < graph.length; row++) {
    for (let col = 1; col < graph[row].length; col++) {
      graph[row][col] = graph[row - 1][col] + graph[row][col - 1];
    }
  }
  return graph[height - 1][width - 1];
}

console.table(numberOfWaysToTraverseGraph(4, 3));

