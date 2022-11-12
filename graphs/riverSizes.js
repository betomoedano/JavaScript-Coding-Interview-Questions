// MY SOLUTION !!!
// time O(wh)
// space O(wh)
/*
function riverSizes(matrix) {
  const result = [];
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if(matrix[row][col] !== 1) continue;
      const currentRiverSize = getRiverSize(matrix, row, col);
        result.push(currentRiverSize);
    }
  }
  return result;
}

function getRiverSize(matrix, row, col) {
  const stack = [[row,col]];
  let sizeCounter = 0;

  while (stack.length) {
    const currentRiver = stack.pop();
    const [currentRow, currentCol] = currentRiver;
    if(matrix[currentRow][currentCol] === 0) continue;
    matrix[currentRow][currentCol] = 0;
    sizeCounter++;
    const neighbors = getNeighbors(matrix, currentRow, currentCol);
    for (const neighbor of neighbors) {
      stack.push(neighbor);
    }
  }
  return sizeCounter;
}

function getNeighbors(matrix, row, col) {
  const neighbors = [];
  if(row - 1 >= 0) neighbors.push([row - 1, col]);
  if(row + 1 < matrix.length) neighbors.push([row + 1, col]);
  if(col - 1 >= 0) neighbors.push([row, col - 1]);
  if(col + 1 < matrix[row].length) neighbors.push([row, col + 1]);
  return neighbors;
}

*/
// breadth-first search to find islands
// O(wh) time | O(wh) space

function riverSizes(matrix) {
  const sizes = [];
  const visited = matrix.map((row) => row.map((value) => false));

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (visited[row][col]) continue;
      traverseNode(row, col, matrix, visited, sizes);
    }
  }
  return sizes;
}

function traverseNode(row, col, matrix, visited, sizes) {
  let currentRiverSize = 0;
  const nodesToExplore = [[row, col]]; //stack

  while (nodesToExplore.length) {
    let currentNode = nodesToExplore.pop();
    row = currentNode[0];
    col = currentNode[1];
    if (visited[row][col]) continue;
    visited[row][col] = true;
    if (matrix[row][col] === 0) continue;
    currentRiverSize++;
    const unvisitedNeighbors = getUnvisitedNeighbors(row, col, matrix, visited);
    for (let neighbor of unvisitedNeighbors) {
      nodesToExplore.push(neighbor);
    }
  }
  if (currentRiverSize > 0) sizes.push(currentRiverSize);
}

function getUnvisitedNeighbors(row, col, matrix, visited) {
  const unvisitedNeighbors = [];

  if (row > 0 && !visited[row - 1][col])
    unvisitedNeighbors.push([row - 1, col]);
  if (row < matrix.length - 1 && !visited[row + 1][col])
    unvisitedNeighbors.push([row + 1, col]);
  if (col > 0 && !visited[row][col - 1])
    unvisitedNeighbors.push([row, col - 1]);
  if (col < matrix[row].length - 1 && !visited[row][col + 1])
    unvisitedNeighbors.push([row, col + 1]);

  return unvisitedNeighbors;
}
