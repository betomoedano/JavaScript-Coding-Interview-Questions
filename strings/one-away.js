// There are three types of edits that can be performed on srings: insert, remove or replace.
// Given two strings, write a function to check if they are one or zero edits away

/**
 * Scan through both strings's at the same time, when a difference is
 * encountered:
 *   * if this is the first edit:
 *     * if strings are the same length then consider it a replacement
 *     * if strings are different lengths then consider it a delete from the longer string
 *   * if this is the second edit then return false
 *
 * N = max(|str1|, |str2|)
 * Time: O(N)
 * Additional space: O(1)
 *
 * @param  {string}  str1 The first string
 * @param  {string}  str2 The second string
 * @return {boolean}      True if strings are 0 or 1 edit apart, otherwise false
 */
export function isOneOrLessAway(str1, str2) {
  // if lengths differ by more than 1 then can't be true
  if (Math.abs(str1.length - str2.length) > 1) {
    return false;
  }

  let isEdited = false;
  for (let i = 0, j = 0; i < str1.length && j < str2.length; ++i, ++j) {
    if (str1[i] !== str2[j]) {
      if (isEdited) {
        // second edit
        return false;
      }

      if (str1.length > str2.length) {
        --j; // decrease j, we are deleting char from str1
      } else if (str1.length < str2.length) {
        --i; // decrease i, we are deleting char from str2
      }
      isEdited = true;
    }
  }

  return true;
}

// Time O(n + m)
// Space O(max(n + m))
function oneAway(array1, array2) {
  const largerString = array1.length > array2.length ? array1 : array2;
  const smallString = array1.length <= array2.length ? array1 : array2;
  const frequencies = {};
  let edits = 0;

  if (largerString.length - smallString.length > 1) return false;

  for (let i = 0; i < largerString.length; i++) {
    if (frequencies.hasOwnProperty(largerString[i])) {
      frequencies[largerString[i]]++;
    } else {
      frequencies[largerString[i]] = 1;
    }
  }

  for (let j = 0; j < smallString.length; j++) {
    if (frequencies.hasOwnProperty(smallString[j])) {
      if (frequencies[smallString[j]] === 0) return false;
      frequencies[smallString[j]] -= 1;
    }
  }

  Object.values(frequencies).forEach((value) => {
    edits += value;
  });

  return edits <= 1;
}

console.log(oneAway("pale", "ple"));
console.log(oneAway("pale", "pales"));
console.log(oneAway("pale", ""));
console.log(oneAway("pale", "bake"));
