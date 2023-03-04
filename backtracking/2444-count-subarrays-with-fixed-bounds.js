/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function (nums, minK, maxK) {
  let sum = 0;
  let start = 0,
    minStart = 0,
    maxStart = 0;
  let minf = false,
    maxf = false;

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (num < minK || num > maxK) {
      minf = false;
      maxf = false;
      start = i + 1;
    }

    if (num === minK) {
      minf = true;
      minStart = i;
    }

    if (num === maxK) {
      maxf = true;
      maxStart = i;
    }

    if (minf && maxf) {
      sum += Math.min(minStart, maxStart) - start + 1;
    }
  }

  return sum;
};
