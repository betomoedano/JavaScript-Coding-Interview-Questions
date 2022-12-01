/**
 * Time O(nm) where n is the width and m is the height of the matrix
 * Space O(nm)
 * @author {Alberto Moedano}
 * @param {number[][]}
 * @return {void}
 */

function zeroMatrix(matrix) {
  if (!matrix) return;
  let onlyZeros = true;
  const zeros = [];

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] !== 0) onlyZeros = false;
      if (matrix[row][col] === 0) {
        zeros.push([row, col]);
      }
    }
  }
  if (onlyZeros) return matrix; //return early
  console.log(zeros);

  while (zeros.length > 0) {
    const [row, col] = zeros.pop();
    top(row, col, matrix);
    right(row, col, matrix);
    bottom(row, col, matrix);
    left(row, col, matrix);
  }
  return matrix;
}

function top(row, col, matrix) {
  if (row === 0) return;
  for (let i = row; i >= 0; i--) {
    matrix[i][col] = 0;
  }
}

function right(row, col, matrix) {
  if (col >= matrix[row].length - 1) return;
  for (let i = col; i < matrix[row].length; i++) {
    matrix[row][i] = 0;
  }
}

function bottom(row, col, matrix) {
  if (row >= matrix.length - 1) return;
  for (let i = row; i < matrix.length; i++) {
    matrix[i][col] = 0;
  }
}

function left(row, col, matrix) {
  if (col <= 0) return;
  for (let i = col; i >= 0; i--) {
    matrix[row][i] = 0;
  }
}

const matrix = [
  [0, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 0, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 0, 3, 4],
  [1, 2, 3, 4],
];
// const output = [
//   [1, 2, 0, 4]
//   [1, 2, 0, 4]
//   [0, 0, 0, 0]
// ]
console.table(zeroMatrix(matrix));
