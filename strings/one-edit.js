/**
 *
 * @param {string} stringOne
 * @param {string} stringTwo
 * @returns {bool}
 * Optimal Solution
 * Time O(n) - Space O(1) - where n is the length of the shorter string
 */

function oneEdit(stringOne, stringTwo) {
  const lengthOne = stringOne.length;
  const lengthTwo = stringTwo.length;
  if (Math.abs(lengthOne - lengthTwo) > 1) return false;

  let madeEdit = false;
  let indexOne = 0;
  let indexTwo = 0;

  while (indexOne < lengthOne && indexTwo < lengthTwo) {
    if (stringOne[indexOne] !== stringTwo[indexTwo]) {
      if (madeEdit) return false;
      madeEdit = true;
      if (lengthOne > lengthTwo) {
        indexOne++;
      } else if (lengthTwo > lengthOne) {
        indexTwo++;
      } else {
        indexTwo++;
        indexOne++;
      }
    } else {
      indexOne++;
      indexTwo++;
    }
  }
  return true;
}

// Time O(n + m)
// Space  O(n)
function oneEdit(stringOne, stringTwo) {
  const lengthDiff = Math.abs(stringOne.length - stringTwo.length);
  if (lengthDiff >= 2) return false;

  let edit = 1;

  if (lengthDiff === 1) {
    const [str1, str2] = remove(stringOne, stringTwo);
    if (str1 === str2) {
      return true;
    } else {
      return false;
    }
  }

  for (let i = 0; i < stringOne.length; i++) {
    if (edit < 0) {
      return false;
    } else {
      if (stringOne[i] === stringTwo[i]) continue;
      edit--;
    }
  }
  return true;
}

function remove(string1, string2) {
  let largestString = string1.length > string2.length ? string1 : string2;
  let smallestString = string1.length > string2.length ? string2 : string1;
  let stringAfterRemoving = "";

  const freq = {};
  let letterToRemove = null;

  for (const char of largestString) {
    if (!freq.hasOwnProperty(char)) {
      freq[char] = 1;
    } else {
      freq[char]++;
    }
  }

  for (const char of smallestString) {
    if (freq.hasOwnProperty(char)) {
      freq[char]--;
      if (freq[char] === 0) {
        delete freq[char];
      }
    }
  }

  Object.keys(freq).forEach((key) => (letterToRemove = key));

  let removeOne = 1;
  for (let i = 0; i < largestString.length; i++) {
    if (largestString[i] === letterToRemove && removeOne > 0) {
      removeOne--;
      continue;
    }
    stringAfterRemoving += largestString[i];
  }
  return [smallestString, stringAfterRemoving];
}
