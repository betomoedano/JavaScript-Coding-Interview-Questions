// 491. Non-decreasing Subsequences
// Medium
// Given an integer array nums, return all the different possible non-decreasing subsequences of the given array with at least two elements. You may return the answer in any order.

// Example 1:
// Input: nums = [4,6,7,7]
// Output: [[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]

// Example 2:
// Input: nums = [4,4,3,2,1]
// Output: [[4,4]]

/////// SOLUTION ////////////////
// Approach
// The outer function findSubsequences takes in an array of integers, originalArray.
// nonDecreasingSubsequences is an array that will hold the final list of non-decreasing subsequences.
// The inner function backtrack takes in two parameters: currentSubsequence, an array that holds the current subsequence being built and startIndex which represents the index of the next number we should consider in the input array.
// Inside the backtrack function, it starts by checking if the currentSubsequence has more than one element, if it does, it pushes a copy of the current currentSubsequence to the nonDecreasingSubsequences list.
// It then creates a set uniqueElements to keep track of unique elements in the current sequence to avoid duplicates.
// The function then starts a for loop from the current index to the end of the input array.
// Inside the loop, it checks if the current element is less than the element of the startIndex - 1, if it is, it continues to the next iteration to ensure non-decreasing order.
// Then it checks if the current element is already in the uniqueElements set, if it is, it continues to the next iteration to avoid duplicates.
// If the current element passes both checks, it adds the current element to the currentSubsequence and recursively calls the backtrack function with the updated currentSubsequence and i+1 as the next index.
// After the recursive call, the function backtracks and removes the last element from the current subsequence.
// Finally, the backtrack function is called initially with an empty array as the current subsequence and 0 as the start index.
// Complexity
// Time Complexity:
// The time complexity of this algorithm is O(2^n * n), where n is the length of the input array. This is because for each element in the input array, we have two choices, either to include it in the current subsequence or not. And for each element in the input array, we need to check if it's unique and if the current subsequence is non-decreasing. This results in a time complexity of O(n∗2n)O(n* 2^n)O(n∗2 n).

// Space Complexity:
// The space complexity of this algorithm is O(n * 2^n), where n is the length of the input array. This is because for each element in the input array, we are generating 2^n possible subsequences and for each subsequence, we need to store n elements. This results in a space complexity of O(n∗2n)O(n* 2^n)O(n∗2 n).

/**
 * @param {number[]} nums
 * @return {number[][]}
 * O(2^n * n) time
 * O(2^n * n) space
 */
const findSubsequences = (originalArray) => {
  const nonDecreasingSubsequences = [];

  const backtrack = (currentSubsequence, startIndex) => {
    if (currentSubsequence.length > 1)
      nonDecreasingSubsequences.push([...currentSubsequence]);
    const uniqueElements = new Set();

    for (let i = startIndex; i < originalArray.length; i++) {
      if (originalArray[i] < originalArray[startIndex - 1]) continue;
      if (uniqueElements.has(originalArray[i])) continue;
      uniqueElements.add(originalArray[i]);
      currentSubsequence.push(originalArray[i]);
      backtrack(currentSubsequence, i + 1);
      currentSubsequence.pop();
    }
  };
  backtrack([], 0);
  return nonDecreasingSubsequences;
};
