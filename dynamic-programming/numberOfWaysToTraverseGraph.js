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

// Solution 2
// O(n m) time
// O(n m) space

// function numberOfWaysToTraverseGraph(width, height) {
//   const graph = [];
//   for (let row = 0; row < height; row++) {
//     const rowToInsert = [];
//     for (let col = 0; col < width; col++) {
//       rowToInsert.push(col);
//     }
//     rowToInsert[0] = 1;
//     graph.push(rowToInsert);
//   }
//   for (let i = 0; i < graph[0].length; i++) {
//     graph[0][i] = 1;
//   }

//   for (let row = 1; row < graph.length; row++) {
//     for (let col = 1; col < graph[row].length; col++) {
//       graph[row][col] = graph[row - 1][col] + graph[row][col - 1];
//     }
//   }
//   return graph[height - 1][width - 1];
// }

//
// Solution 3
// Optimal solution
// This solutions uses a formula to get the permutations
// Time O(n + m) - where n is the width and m is the height of the graph
// Space O(1)
//
function numberOfWaysToTraverseGraph(width, height) {
  const numerator = factorial(width - 1 + height - 1);
  const denominator = factorial(width - 1) * factorial(height - 1);
  return Math.floor(numerator / denominator);
}

function factorial(num) {
  let result = 1;

  for (let n = 2; n < num + 1; n++) {
    result *= n;
  }
  return result;
}

console.table(numberOfWaysToTraverseGraph(4, 3));
