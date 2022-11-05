// Write a function that takes in two non-empty arrays of integers, finds the
// pair of numbers (one from each array) whose absolute difference is closest to
// zero, and returns an array containing these two numbers, with the number from
// the first array in the first position.
// Note that the absolute difference of two integers is the distance between
// them on the real number line. For example, the absolute difference of -5 and 5
// is 10, and the absolute difference of -5 and -4 is 1.

// You can assume that there will only be one pair of numbers with the smallest
// difference.
// = [-1, 5, 10, 20, 28, 3]
// = [26, 134, 135, 15, 17]
// R =[28, 26]

// Time O(n log n + m log m) n is arrayOne and m arrayTwo
// Space O(1);
function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let currentSmallestValue = Infinity;
  let posibleResult = [0, 0];
  let pointerOne = 0;
  let pointerTwo = 0;

  while (pointerOne < arrayOne.length && pointerTwo < arrayTwo.length) {
    const numberOne = arrayOne[pointerOne];
    const numberTwo = arrayTwo[pointerTwo];

    if (Math.abs(numberOne - numberTwo) === 0) {
      return [numberOne, numberTwo];
    } else {
      if (currentSmallestValue > Math.abs(numberOne - numberTwo)) {
        posibleResult[0] = numberOne;
        posibleResult[1] = numberTwo;
        currentSmallestValue = Math.abs(numberOne - numberTwo);
      }
      if (numberOne < numberTwo) {
        pointerOne++;
      } else {
        pointerTwo++;
      }
    }
  }
  console.log(posibleResult);
  return posibleResult;
}
