/**
 * @param {number[]} nums
 * @return {number}
 */

// Solution using Dynamic Programming
// Time O(n) | Space O(1)
var rob = function (nums) {
  if (!nums) return 0;
  if (nums.length === 1) return nums[0];

  let first = nums[0];
  let second = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    const nextMax = Math.max(nums[i] + first, second);
    first = second;
    second = nextMax;
  }
  return second;
};

// Solution using extra memory
// Time O(n)
// Space O(n)
// var rob = function(nums) {
//   if (!nums) return 0;
//   if (nums.length === 1) return nums[0];

//   const maxBetweenFirstTwo = Math.max(nums[0], nums[1]);
//   const maxSums = [nums[0], maxBetweenFirstTwo];

//   for (let i = 2; i < nums.length; i ++) {
//     maxSums[i] = Math.max(nums[i] + maxSums[i - 2], maxSums[i - 1]);
//   }
//   return maxSums[maxSums.length - 1];
// };

function maxSubsetSumNoAdjacent(array) {
  if (!array) return 0;
  if (array.length === 1) return array[0];
  let second = array[0];
  let first = Math.max(array[0], array[1]);
  for (let i = 2; i < array.length; i++) {
    const current = Math.max(first, second + array[i]);
    second = first;
    first = current;
  }
  return first;
}

const array = [75, 105, 120, 75, 90, 135];
console.log(maxSubsetSumNoAdjacent(array));
