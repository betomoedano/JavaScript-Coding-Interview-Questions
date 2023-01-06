//
// This is a little more optimized, it is likely to be faster in practice because
// it short-circuits the inner loop and breaks out of the outer loop early
// when the array is already sorted.
// Best O(n) time
// Time O(n^2) -- because we need to iterate multiple times
// Space O(1)
//

function bubbleSort(array) {
  let isSorted = false;
  let iteration = 0;

  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < array.length - 1 - iteration; i++) {
      if (array[i] > array[i + 1]) {
        swap(i, i + 1, array);
        isSorted = false;
      }
    }
    iteration++;
  }

  return array;
}

function swap(a, b, array) {
  const temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}
const nums = [1, 3, 4, 5, 67, 4, 2];
console.log(bubbleSort(nums));

// not optimized version
// same time-space complexity

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        // swap
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}
