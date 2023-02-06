/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 * Time O(n) where n is the number of numbers in the array nums
 * Space O(1)
 */
var shuffle = function (nums, n) {
  const result = [];

  for (let left = 0; left < n; left++) {
    const right = n + left;
    result.push(nums[left]);
    result.push(nums[right]);
  }
  return result;
};
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 * Time O(n) where n is the number of numbers in the array nums
 * Space O(1)
 */
var shuffle = function (nums, n) {
  const result = [];

  for (let left = 0; left < n; left++) {
    const right = n + left;
    result.push(nums[left]);
    result.push(nums[right]);
  }
  return result;
};
