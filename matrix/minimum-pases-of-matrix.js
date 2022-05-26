// MINIMUM PASSES OF MATRIX
// time: O(w*h) where w is the width and h the heigth of the matrix
// space: O(w*h) because we are storing the "toChange" matrix;

function minimumPassesOfMatrix(matrix) {
    const toChange = matrix.map((row) => row.map((col) => false));
    let numberOfPasses = 0;
    let canKeepPassing = true;
  
    while (canKeepPassing) {
      for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
          const currentNumber = matrix[row][col];
          if (currentNumber >= 0) continue;
          const neighbors = getNeighbors(row, col, matrix);
  
          for (let neighbor of neighbors) {
            if (neighbor <= 0) continue;
            toChange[row][col] = true;
          }
        }
      }
  
      canKeepPassing = false;
      for (let row = 0; row < toChange.length; row++) {
        for (let col = 0; col < toChange[row].length; col++) {
          if (toChange[row][col] === false) continue;
          matrix[row][col] *= -1;
          toChange[row][col] = false;
          canKeepPassing = true;
        }
      }
      numberOfPasses++;
    }
  
    return !containsNegative(matrix) ? numberOfPasses - 1 : -1;
  }
  
  function getNeighbors(row, col, matrix) {
    const neighbors = [];
    if (row - 1 >= 0) neighbors.push(matrix[row - 1][col]);
    if (row + 1 < matrix.length) neighbors.push(matrix[row + 1][col]);
    if (col - 1 >= 0) neighbors.push(matrix[row][col - 1]);
    if (col + 1 < matrix[row].length) neighbors.push(matrix[row][col + 1]);
  
    return neighbors;
  }
  
  function containsNegative(matrix) {
    for (const row of matrix) {
      for (const value of row) {
        if (value < 0) return true;
      }
    }
    return false;
  }
  
  const matrix = [
    [1, 0, 0, -2, -3],
    [-4, -5, -6, -2, -1],
    [0, 0, 0, 0, -1],
    [-1, 0, 3, 0, 3]
  ];
  
  console.log(minimumPassesOfMatrix(matrix));
  