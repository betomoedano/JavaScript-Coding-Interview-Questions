// Time O(n log n) because we are sorting the array
// Space O(1)
function nonConstructibleChange(coins) {
  if (coins.length === 0) return 1;

  coins.sort((a, b) => a - b);

  let change = 0;

  for (const coin of coins) {
    if (coin > change + 1) return change + 1;
    change += coin;
  }
  return change + 1;
}
