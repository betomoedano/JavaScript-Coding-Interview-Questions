// Given an array of integers between 1 and n, inclusive, where  is the length of the array, write a function
// that returns the first integer that appears more than once (when the array is
// read from left to right).

// In other words, out of all the integers that might occur more than once in the
// input array, your function should return the one whose first duplicate value
// has the minimum index.

// If no integer appears more than once, your function should return - 1
// <p>Note that you're allowed to mutate the input array.</p>

//
// Time O(n)
// Space O(1)
// We are using the fact that the array only contains values
// between 1 - n inclusive. We convert the values that we've already
// seen to negative that way when we find a value that is negative it
// means we have found the first duplicated value.
//
function firstDuplicateValue(array) {
  for (const value of array) {
    const idx = Math.abs(value) - 1;
    if (array[idx] < 0) return Math.abs(value);
    array[idx] *= -1;
  }
  return -1;
}

//
// Time O(n)
// Space O(n)
// This solutions is a bit worse than the one above because
// we are using extra space by creating the set of values that we've already seen
//
function firstDuplicateValue(array) {
  const set = new Set();

  for (const num of array) {
    if (set.has(num)) return num;
    set.add(num);
  }
  return -1;
}
