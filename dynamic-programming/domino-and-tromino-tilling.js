/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function (N) {
  const mod = 1e9 + 7;
  const cash = new Map([
    [1, 1],
    [2, 2],
    [3, 5],
  ]);
  const count = (n) => {
    if (!cash.has(n)) cash.set(n, count(n - 1) * 2 + count(n - 3));
    return cash.get(n) % mod;
  };
  return count(N);
};
