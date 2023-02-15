/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
// Time O(n)
// Space O(n)
var addToArrayForm = function (num, k) {
  let numToNum = BigInt(num.join("")) + BigInt(k);
  return numToNum.toString().split("").map(Number);
};
