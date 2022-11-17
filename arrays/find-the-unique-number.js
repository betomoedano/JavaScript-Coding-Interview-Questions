// Time O(n)
// Space O(1)

function findUniq(arr) {
  const firstNumber = arr[0];
  const secondNumber = arr[1];
  const thirdNumber = arr[arr.length - 1];

  const duplicatedNumber =
    firstNumber === secondNumber
      ? firstNumber
      : firstNumber === thirdNumber
      ? firstNumber
      : secondNumber;

  let leftPointer = 0;
  let rightPointer = arr.length;

  while (leftPointer < rightPointer) {
    if (arr[leftPointer] === duplicatedNumber) {
      leftPointer++;
    } else if (arr[rightPointer] === duplicatedNumber) {
      rightPointer--;
    } else if (arr[leftPointer] !== duplicatedNumber) {
      return arr[leftPointer];
    } else if (arr[rightPointer] !== duplicatedNumber) {
      return arr[rightPointer];
    }
  }
}
