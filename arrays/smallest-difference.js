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
