// Given an array of numbers, and a target value. Return an array containing
// all posible numbers that added up are equal to the target.
// note that you can not use the same number more than once.

// Example
// const nums = [1, 2, 3, 4];
// [[1, 2],[3]] target = 3
// [[1, 3],[4]] target = 4

//
// Time O(n 2^n) - where n is the number of values in the input array
// Time O(n) - because we are using recursion, at most we will have n calls in the call-stack
//
const getSums = (nums, target) => {
  const result = [];
  backtrack(0, 0, [], nums, result, target);
  return result;
};

function backtrack(idx, currSum, currSumArray, nums, result, target) {
  if (idx > nums.length || currSum > target) {
    return;
  }
  if (currSum === target) {
    result.push(currSumArray.slice());
    return;
  }
  currSumArray.push(nums[idx]);
  backtrack(idx + 1, currSum + nums[idx], currSumArray, nums, result, target);
  currSumArray.pop();
  backtrack(idx + 1, currSum, currSumArray, nums, result, target);
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8];
console.table(getSums(nums, 8));
console.table(getSums(nums, 1));
console.table(getSums(nums, 20));
