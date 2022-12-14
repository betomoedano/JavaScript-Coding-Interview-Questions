// Time O(n) where n is the total number of items in the matrix
// Space O(1)
var minFallingPathSum = function (A) {
  if (A.length === 1) return A[0][0];

  for (let i = 1; i < A.length; i++) {
    for (let j = 0; j < A.length; j++) {
      A[i][j] += Math.min(
        j > 0 ? A[i - 1][j - 1] : Infinity,
        A[i - 1][j],
        j < A.length - 1 ? A[i - 1][j + 1] : Infinity
      );
    }
  }
  console.log(A);

  return Math.min(...A[A.length - 1]);
};
