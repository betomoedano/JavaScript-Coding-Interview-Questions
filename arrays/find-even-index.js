// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

// For example:

// Let's say you are given the array {1,2,3,4,3,2,1}:
// Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

// Let's look at another one.
// You are given the array {1,100,50,-51,1,1}:
// Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

// Time O(n)
// Space O(1)

function findEvenIndex(arr) {
  let totalSum = arr.reduce((a, b) => a + b);
  let leftSum = 0;
  let rightSum = totalSum - leftSum - arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (leftSum === rightSum) return i;
    leftSum += arr[i];
    rightSum = totalSum - leftSum - arr[i + 1];
  }
  return -1;
}
