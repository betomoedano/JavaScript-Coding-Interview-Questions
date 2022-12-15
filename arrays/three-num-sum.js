// Time O(n^2) | space O(n) where n is the number of three sums

function threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < array.length - 1; i++) {
    const firstNumber = array[i];
    let leftPointer = i + 1;
    let rightPointer = array.length - 1;

    while (leftPointer < rightPointer) {
      const leftNumber = array[leftPointer];
      const rightNumber = array[rightPointer];
      if (firstNumber + leftNumber + rightNumber === targetSum) {
        result.push([firstNumber, leftNumber, rightNumber]);
        leftPointer++;
        rightPointer--;
      } else if (firstNumber + leftNumber + rightNumber < targetSum) {
        leftPointer++;
      } else {
        rightPointer--;
      }
    }
  }
  return result;
}

const array = [12, 3, 1, 2, -6, 5, 0, -8, -1, 6];
const targetSum = 0;

// This solution avoids duplicates
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// Time O(n^2)
// Space O(n)
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let triplets = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue; //avoid duplicates

    let leftPointer = i + 1;
    let rightPointer = nums.length - 1;

    while (leftPointer < rightPointer) {
      let currentSum = nums[i] + nums[leftPointer] + nums[rightPointer];
      if (currentSum === 0) {
        triplets.push([nums[i], nums[leftPointer], nums[rightPointer]]);
        leftPointer++;
        rightPointer--;
        while (
          leftPointer < rightPointer &&
          nums[leftPointer] == nums[leftPointer - 1]
        )
          leftPointer++; //avoid duplicates
        while (
          leftPointer < rightPointer &&
          nums[rightPointer] == nums[rightPointer + 1]
        )
          rightPointer--; //avoid duplicates
      } else if (currentSum > 0) {
        rightPointer--;
      } else if (currentSum < 0) {
        leftPointer++;
      }
    }
  }
  return triplets;
};
