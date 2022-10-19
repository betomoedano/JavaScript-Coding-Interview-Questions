var maxSubArray = function (nums) {
  let maxSub = nums[0];
  let currentSum = 0;

  for (const num of nums) {
    if (currentSum < 0) {
      currentSum = 0;
    }
    currentSum += num;
    maxSub = Math.max(maxSub, currentSum);
  }
  return maxSub;
};

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums));
