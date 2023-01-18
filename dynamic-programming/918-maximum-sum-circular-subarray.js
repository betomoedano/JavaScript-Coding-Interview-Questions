// 918. Maximum Sum Circular Subarray
// Medium
// Given a circular integer array nums of length n, return the maximum possible sum of a non-empty subarray of nums.

// A circular array means the end of the array connects to the beginning of the array. Formally, the next element of nums[i] is nums[(i + 1) % n] and the previous element of nums[i] is nums[(i - 1 + n) % n].

// A subarray may only include each element of the fixed buffer nums at most once. Formally, for a subarray nums[i], nums[i + 1], ..., nums[j], there does not exist i <= k1, k2 <= j with k1 % n == k2 % n.

// Example 1:

// Input: nums = [1,-2,3,-2]
// Output: 3
// Explanation: Subarray [3] has maximum sum 3.
/**
 * @param {number[]} nums
 * @return {number}
 * Time O(n)
 * Space O(1)
 */
var maxSubarraySumCircular = function (nums) {
  let total = 0; // sum of every element in nums
  let maxSum = -Infinity; // max subarray sum (kadane's algorithm)
  let curMax = 0; // current max sum subarray
  let minSum = Infinity; // min subarray sum (kadane's algorithm)
  let curMin = 0; // current min sum subarray

  // iterate for each element and obtain the min and max subarrays and total
  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];
    total += currNum;
    curMax = Math.max(curMax + currNum, currNum);
    maxSum = Math.max(curMax, maxSum);
    curMin = Math.min(curMin + currNum, currNum);
    minSum = Math.min(curMin, minSum);
  }

  // if the minSum is equal to the total sum of elements, this means that every
  // element in the array is negative so that we can just return the maxSum.
  // Otherwise we return the max between maxSum or the total array sum minus the minSum subarray
  return minSum === total ? maxSum : Math.max(maxSum, total - minSum);
};

// example
// array = [5, -3 , 5]
// in this example we have the following
// total sum = 7
// maxSum subarray = 7 (obtained by adding all 3 elements)
// minSum subarray = -3
//
// result = max(7, 7 - -3)
// result = max(7, 10)
// result = 10
// basically we took the hole array and substract the min subarray(-3
