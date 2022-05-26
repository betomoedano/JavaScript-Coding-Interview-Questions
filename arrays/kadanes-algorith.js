// KADANE'S ALGORITHM

// Write a function that take in a non-empty array of intergers and returns the maximmym sum that
// can be obtained by summing up all of the integers in a non-empty subarray of the input array.
// A subarray must only contain adjacent numbers

function kadanesAlgorithm(array) {
  let maxEndingHere = array[0];
  let maxSoFar = array[0];

  for (let i = 1; i < array.length; i++) {
    const num = array[i];
    maxEndingHere = Math.max(num, maxEndingHere + num);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  return maxSoFar;
}
//-1

const array = [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4];

console.log(kadanesAlgorithm(array));

