// time O(n^2) worst case
// time O(n log n) best and Avg case
// space O(log n) because we need to use recursion and if we apply quick sort first on the smaller array that
// way we know that at most we will store log n calls on the call stack
function quickSort(array) {
  quickSortHelper(array, 0, array.length - 1);
  return array;
}

function quickSortHelper(array, startIdx, endIdx) {
  if (startIdx >= endIdx) return;
  let pivotIdx = startIdx;
  let leftIdx = startIdx + 1;
  let rightIdx = endIdx;

  while (rightIdx >= leftIdx) {
    const pivotNumber = array[pivotIdx];
    const leftNumber = array[leftIdx];
    const rightNumber = array[rightIdx];

    if (leftNumber > pivotNumber && rightNumber < pivotNumber) {
      swap(leftIdx, rightIdx, array);
    }
    if (leftNumber <= pivotNumber) leftIdx++;
    if (rightNumber >= pivotNumber) rightIdx--;
  }
  swap(pivotIdx, rightIdx, array);
  const leftSubarrayIsSmaller =
    rightIdx - 1 - startIdx < endIdx - (rightIdx + 1);
  if (leftSubarrayIsSmaller) {
    quickSortHelper(array, startIdx, rightIdx - 1);
    quickSortHelper(array, rightIdx + 1, endIdx);
  } else {
    quickSortHelper(array, rightIdx + 1, endIdx);
    quickSortHelper(array, startIdx, rightIdx - 1);
  }
}

function swap(i, j, array) {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}

const array = [8, 5, 2, 9, 5, 6, 3];
console.log(quickSort(array));
