/**
 * @param {number[]} nums
 * @return {number}
 *
 * Time O(n)
 * Space O(n)
 */
var minimumAverageDifference = function (nums) {
  const leftAverage = new Array(nums.length).fill(0);
  const rightAverage = new Array(nums.length).fill(0);
  let min = Infinity;
  let minIdx = 0;

  let currentSum = 0;
  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];
    leftAverage[i] = Math.floor((number + currentSum) / (i + 1));
    currentSum += number;
  }
  currentSum = 0;
  for (let i = nums.length - 1; i > 0; i--) {
    const number = nums[i];
    rightAverage[i - 1] = Math.floor((number + currentSum) / (nums.length - i));
    currentSum += number;
  }

  for (let i = 0; i < nums.length; i++) {
    const absDiff = Math.abs(leftAverage[i] - rightAverage[i]);
    if (absDiff < min) {
      minIdx = i;
      min = absDiff;
    }
  }

  return minIdx;
};
