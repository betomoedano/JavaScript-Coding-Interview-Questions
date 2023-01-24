/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 * Time O(n)
 * Space O(n)
 */
var findJudge = function (n, trust) {
  let trustCount = new Array(n + 1).fill(0);
  for (let i = 0; i < trust.length; i++) {
    trustCount[trust[i][0]]--;
    trustCount[trust[i][1]]++;
  }
  for (let i = 1; i <= n; i++) {
    if (trustCount[i] === n - 1) {
      return i;
    }
  }
  return -1;
};
