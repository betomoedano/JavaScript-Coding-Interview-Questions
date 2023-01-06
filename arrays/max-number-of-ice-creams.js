/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 * Time O(n log n)
 * Space O(1)
 */
var maxIceCream = function (costs, coins) {
  costs.sort((a, b) => a - b);
  let maxIceCream = 0;
  let idx = 0;

  while (coins > 0 && idx < costs.length) {
    if (costs[idx] > coins) break;

    coins -= costs[idx];
    maxIceCream++;
    idx++;
  }

  return maxIceCream;
};
