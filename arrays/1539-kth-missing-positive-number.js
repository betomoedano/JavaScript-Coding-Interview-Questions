/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
//
// Time O(k + n) worst case we iterate over every element of the arr plus k
// Space O(1)
//
var findKthPositive = function (arr, k) {
  let arrIdx = 0;
  let result = 1;
  let kCounter = 0;

  for (let i = 1; i < arr[arr.length - 1] + k + 1; i++) {
    if (kCounter === k) break;
    if (i === arr[arrIdx]) {
      arrIdx++;
    } else {
      result = i;
      kCounter++;
    }
  }
  return result;
};
