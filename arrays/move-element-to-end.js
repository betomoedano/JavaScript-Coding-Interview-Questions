// You're given an array of integers and an integer. Write a function that moves
// all instances of that integer in the array to the end of the array and returns
// the array.

// The function should perform this in place (i.e., it should mutate the input
// array) and doesn't need to maintain the order of the other integers.

// Time O(n)
// Space O(1)
function moveElementToEnd(array, toMove) {
  let leftPointer = 0;
  let rightPointer = getRightDifferent(array, array.length - 1, toMove);

  while (leftPointer < rightPointer) {
    if (array[leftPointer] === toMove) {
      swap(leftPointer, rightPointer, array);
      rightPointer = getRightDifferent(array, rightPointer--, toMove);
      leftPointer++;
    } else {
      leftPointer++;
    }
  }
  return array;
}

function swap(a, b, array) {
  const temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

function getRightDifferent(array, from, toMove) {
  let rightPointer = from;
  while (array[rightPointer] === toMove || rightPointer > 0) {
    if (array[rightPointer] !== toMove) return rightPointer;
    rightPointer--;
  }
  return rightPointer;
}

const array = [2, 1, 2, 2, 2, 3, 4, 2];
const toMove = 2;
