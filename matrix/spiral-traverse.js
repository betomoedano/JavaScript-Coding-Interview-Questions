// Write a function that takes in an n x m two-dimensional array (that can be
//   square-shaped when n == m) and returns a one-dimensional array of all the
//   array's elements in spiral order.

//   Spiral order starts at the top left corner of the two-dimensional array, goes
//   to the right, and proceeds in a spiral pattern all the way until every element
//   has been visited.

// Time O(n )
// Space O(n) where n is the total number of elements in the matrix
function spiralTraverse(matrix) {
  let startRow = 0;
  let startCol = 0;
  let endRow = matrix.length - 1;
  let endCol = matrix[0].length - 1;
  const spiral = [];

  while (startRow <= endRow && startCol <= endCol) {
    for (let col = startCol; col <= endCol; col++) {
      spiral.push(matrix[startRow][col]);
    }
    for (let i = startRow + 1; i <= endRow; i++) {
      spiral.push(matrix[i][endCol]);
    }
    for (let i = endCol - 1; i >= startCol; i--) {
      if (startRow === endRow) break;
      spiral.push(matrix[endRow][i]);
    }
    for (let i = endRow - 1; i > startRow; i--) {
      if (startCol === endCol) break;
      spiral.push(matrix[i][startCol]);
    }
    startCol++;
    endRow--;
    endCol--;
    startRow++;
  }
  console.log(spiral);
  return spiral;
}
