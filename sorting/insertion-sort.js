// insertion sort
// Time O(n^2) | Best O(n) "with a sorted array as input we get the best"
// Space O(1)

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      swap(j, j - 1, array);
      j--;
    }
  }
  return array;
}

function swap(a, b, array) {
  const temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

// variation with one-liner swap
//
// Time O(n) - Best Case
// Time O(n^2) - Worst Case
// Space O(1)
//
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      [array[j], array[j - 1]] = [array[j - 1], array[j]];
      j--;
    }
  }
  return array;
}
