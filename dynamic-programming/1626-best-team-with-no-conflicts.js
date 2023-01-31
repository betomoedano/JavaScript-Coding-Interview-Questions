/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 * Time O(n^2)
 * Space O(n^2)
 */
const bestTeamScore = (scores, ages) => {
  const n = ages.length;
  const ageScorePair = new Array(n);
  for (let i = 0; i < n; i++) {
    ageScorePair[i] = [ages[i], scores[i]];
  }
  ageScorePair.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));
  const dp = new Array(n).fill(0);
  let maxScore = 0;
  for (let i = 0; i < n; i++) {
    dp[i] = ageScorePair[i][1];
    for (let j = 0; j < i; j++) {
      if (ageScorePair[i][1] >= ageScorePair[j][1]) {
        dp[i] = Math.max(dp[i], dp[j] + ageScorePair[i][1]);
      }
    }
    maxScore = Math.max(maxScore, dp[i]);
  }
  return maxScore;
};
