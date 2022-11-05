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
