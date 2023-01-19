// 974. Subarray Sums Divisible by K
// Medium
// Given an integer array nums and an integer k, return the number of non-empty subarrays that have a sum divisible by k.

// A subarray is a contiguous part of an array.

// Example 1:

// Input: nums = [4,5,0,-2,-3,1], k = 5
// Output: 7
// Explanation: There are 7 subarrays with a sum divisible by k = 5:
// [4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]
// Example 2:

// Input: nums = [5], k = 9
// Output: 0

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * Time O(n + m)
 * Space O(m) - we use m space to store mod groups
 */
var subarraysDivByK = function (nums, k) {
  let prefixMod = 0;
  let result = 0;
  const modGroups = new Array(k).fill(0);
  modGroups[0] = 1;

  for (const num of nums) {
    // Take modulo twice to avoid negative remainders.
    prefixMod = (prefixMod + (num % k) + k) % k;
    result += modGroups[prefixMod];
    modGroups[prefixMod]++;
  }

  return result;
};
