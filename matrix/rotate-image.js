// Time O(n^2)
// Space O(1)
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  if (!matrix || matrix.length === 0 || matrix.length !== matrix[0].length) {
    throw new Error("invalid matrix");
  }
  if (matrix.length < 2) {
    return matrix; // no need to do anything to rotate a 1,1 matrix
  }

  let len = matrix.length - 1,
    half = Math.floor(matrix.length / 2);
  // loop through diagonal
  for (let layer = 0; layer < half; layer++) {
    let first = layer;
    let last = len - layer;
    for (let i = first; i < last; i++) {
      let offset = i - first;
      let top = matrix[first][i]; //save top

      // bottom left => top left
      matrix[first][i] = matrix[last - offset][first];

      // bottom right => bottom left
      matrix[last - offset][first] = matrix[last][last - offset];

      // top right => bottom right
      matrix[last][last - offset] = matrix[i][last];

      // top left => top right
      matrix[i][last] = top;
    }
  }

  return matrix;
};
// var rotate = function(matrix) {
//      if (!matrix || matrix.length === 0 || matrix.length !== matrix[0].length) {
//     throw new Error('invalid matrix');
//   }
//   if (matrix.length < 2) {
//     return matrix; // no need to do anything to rotate a 1,1 matrix
//   }

//   let len = matrix.length - 1,
//     half = Math.floor(matrix.length / 2);
//   // loop through diagonal
//   for (let start = 0; start < half; ++start) {

//     // loop through x axis
//     for (let i = 0; i < len - (start * 2); ++i) {
//       let y = start,
//         x = start + i,
//         prev = matrix[y][x];

//       // loop through all 4 corners
//       for (let j = 0; j < 4; ++j) {
//         let nextY = x,
//           nextX = len - y,
//           next = matrix[nextY][nextX];
//         matrix[nextY][nextX] = prev;
//         prev = next;
//         x = nextX;
//         y = nextY;
//       }
//     }
//   }

//   return matrix;
// }
