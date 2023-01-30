/**
 * @param {number} n
 * @return {number}
 * Time O(n)
 * Space O(1)
 */
var tribonacci = function (n) {
  let first = 0;
  let second = 1;
  let third = 1;

  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 1;

  for (let i = 2; i < n; i++) {
    const next = first + second + third;
    first = second;
    second = third;
    third = next;
  }
  return third;
};

/**
 * @param {number} n
 * @return {number}
 * Time O(n)
 * Space O(n)
 */
// var tribonacci = function(n, memo={0: 0, 1: 1, 2: 1}) {
//   if (n in memo) {
//     return memo[n];
//   } else {
//     return memo[n] = tribonacci(n - 1, memo) + tribonacci(n - 2, memo) + tribonacci(n - 3, memo);
//   }
// };
