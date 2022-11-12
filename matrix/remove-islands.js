////////////////////////////////////////////////////////////////////////////////////////////////////////
// REMOVE ISLANDS

// MY SOLUTION
/*
// time O(wh)
// space O(wh) where wh is the widht and height of the matrix

function removeIslands(matrix) {
  const visited = matrix.map(row => row.map(col => false));

  for (let col = 0; col < matrix[0].length; col++) {
    if(matrix[0][col] === 1) {
     markNonIslands(visited, matrix, 0, col);
    }
  } 
  for (let row = 1; row < matrix.length; row++) {
    if(matrix[row][0] === 1) {
     markNonIslands(visited, matrix, row, 0);
    }
  }
  for (let col = 1; col < matrix[0].length; col++) {
    if(matrix[matrix.length - 1][col] === 1){ 
     markNonIslands(visited, matrix, matrix.length - 1, col);
    }
  }
  for (let row = 1; row < matrix.length; row++) {
    if(matrix[row][matrix[0].length - 1] === 1) {
     markNonIslands(visited, matrix, row ,matrix.length - 1);
    }
  }

  for (let row = 1; row < matrix.length; row++) {
    for (let col = 1; col < matrix[0].length; col++) {
      if(matrix[row][col] === 1 && visited[row][col] === false) {
        matrix[row][col] = 0;
      }
    }
  }
  return matrix;
}

function markNonIslands(visited, matrix, row, col) {
  const stack = [[row,col]];

  while (stack.length > 0) {
    const current = stack.pop();
    const [row, col] = current;
    if(visited[row][col]) continue;
    if (matrix[row][col] === 1) {
      visited[row][col] = true;
    }
    const neighbors = getNeighbors(matrix, row, col);  
    for (const neighbor of neighbors) {
      const [row, col] = neighbor;
      if(visited[row][col]) continue;
      stack.push(neighbor);
    }
  }
}

function getNeighbors(matrix, row, col) {
  const neighbors = [];
  if(row - 1 > 0 && matrix[row - 1][col] === 1) neighbors.push([row - 1, col])
  if(row + 1 < matrix.length && matrix[row + 1][col] === 1) neighbors.push([row + 1, col]);
  if(col - 1 > 0 && matrix[row][col - 1] === 1) neighbors.push([row, col - 1])
  if(col + 1 < matrix[0].length && matrix[row][col + 1] === 1) neighbors.push([row, col + 1]);
  return neighbors;
}

*/

function removeIslands(matrix) {
  // 1 -- change ones connected to border to twos '2'

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      const rowIsBorder = row === 0 || row === matrix.length - 1;
      const colIsBorder = col === 0 || col === matrix[row].length - 1;
      const isBorder = rowIsBorder || colIsBorder;
      if (!isBorder) continue;
      if (matrix[row][col] !== 1) continue;
      changeOnesConnectedToBorderToTwos(matrix, row, col);
    }
  }

  // 2 -- change '2' to '1' and '1' to '0';

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      const color = matrix[row][col];
      if (color === 1) {
        matrix[row][col] = 0;
      } else if (color === 2) {
        matrix[row][col] = 1;
      }
    }
  }

  return matrix;
}

function changeOnesConnectedToBorderToTwos(matrix, startRow, startCol) {
  const stack = [[startRow, startCol]];

  while (stack.length > 0) {
    const currentPosition = stack.pop();
    const [currentRow, currenCol] = currentPosition;

    matrix[currentRow][currenCol] = 2;

    const neighbors = getNeighbors(matrix, currentRow, currenCol);
    for (const neighbor of neighbors) {
      const [row, col] = neighbor;

      if (matrix[row][col] !== 1) continue;

      stack.push(neighbor);
    }
  }
}

function getNeighbors(matrix, row, col) {
  const neighbors = [];

  const numRows = matrix.length;
  const numCols = matrix[row].length;

  if (row - 1 >= 0) neighbors.push([row - 1, col]); //UP
  if (row + 1 < numRows) neighbors.push([row + 1, col]); //DOWN
  if (col - 1 >= 0) neighbors.push([row, col - 1]); //LEFT
  if (col + 1 < numCols) neighbors.push([row, col + 1]); //RIGHT

  return neighbors;
}

const input = [
  [1, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 1],
  [0, 0, 1, 0, 1, 0],
  [1, 1, 0, 0, 1, 0],
  [1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 1],
];

// expected = [
//   [1, 0, 0, 0, 0, 0],
//   [0, 0, 0, 1, 1, 1],
//   [0, 0, 0, 0, 1, 0],
//   [1, 1, 0, 0, 1, 0],
//   [1, 0, 0, 0, 0, 0],
//   [1, 0, 0, 0, 0, 1],
// ];

console.table(removeIslands(input));
