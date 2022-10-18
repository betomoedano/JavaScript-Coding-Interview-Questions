// time O(n)
// space O(n) where n is the length of the input array

function minRewards(scores) {
  const rewards = scores.map((_) => 1);

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > scores[i - 1]) rewards[i] = rewards[i - 1] + 1;
  }

  for (let i = scores.length - 2; i >= 0; i--) {
    if (scores[i] > scores[i + 1])
      rewards[i] = Math.max(rewards[i], rewards[i + 1] + 1);
  }
  return rewards.reduce((a, b) => a + b);
}
const scores = [8, 4, 2, 1, 3, 6, 7, 9, 5];
console.log(minRewards(scores));
