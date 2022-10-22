// time O(n^2)
// space O(n^2)
function sameBsts(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  if (arrayOne.length === 0 && arrayTwo.length === 0) return true;
  if (arrayOne[0] !== arrayTwo[0]) return false;

  // create 4 arrays O(n) time and do this n time which leads to n^2
  const leftOne = getSmaller(arrayOne);
  const leftTwo = getSmaller(arrayTwo);
  const rightOne = getBiggerOrEqual(arrayOne);
  const rightTwo = getBiggerOrEqual(arrayTwo);

  return sameBsts(leftOne, leftTwo) && sameBsts(rightOne, rightTwo);
}

function getSmaller(array) {
  const smaller = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[0]) smaller.push(array[i]);
  }
  return smaller;
}

function getBiggerOrEqual(array) {
  const biggerOrEqual = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] >= array[0]) biggerOrEqual.push(array[i]);
  }
  return biggerOrEqual;
}

const arrayOne = [10, 15, 8, 12, 94, 81, 5, 2, 11];
const arrayTwo = [10, 8, 5, 15, 2, 12, 11, 94, 81];
