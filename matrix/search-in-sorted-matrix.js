//////////////////////////////////////////////////////
// SEARCH IN SORTED MATRIX

// time O(h + log(w));
function searchInSortedMatrix(matrix, target) {
    const result = [-1, -1];
    let hasTarget = false;
  
    for (let row = 0; row < matrix.length; row++) {
      hasTarget = binarySearch(matrix[row], target);
      if (hasTarget[0]) {
        result[0] = row;
        result[1] = hasTarget[1];
        return result;
      }
    }
    return result;
  }
  
  function binarySearch(row, target) {
    let left = 0;
    let right = row.length - 1;
    while (left <= right) {
      let middle = Math.floor((left + right) / 2);
      if (row[middle] === target) {
        return [true, middle];
      }
      if (row[middle] < target) {
        left = middle + 1;
      } else if (row[middle] > target) {
        right = middle - 1;
      }
    }
    return [false, -1];
  }
  
  const matrix = [
    [1, 4, 7, 12, 15, 1000],
    [2, 5, 19, 31, 32, 1001],
    [3, 8, 24, 33, 35, 1002],
    [40, 41, 42, 44, 45, 1003],
    [99, 100, 103, 106, 128, 1004]
  ];
  
  console.log(searchInSortedMatrix(matrix, 44));