// O(n*n!) time | O(n*n!) space
function getPermutations(array) {
  const permutations = [];
  permutationsHelper(0, array, permutations);
  return permutations;
}

function permutationsHelper(i, array, permutations) {
  if (i === array.length - 1) {
    permutations.push(array.slice());
  } else {
    for (let j = i; j < array.length; j++) {
      swap(i, j, array);
      permutationsHelper(i + 1, array, permutations);
      swap(i, j, array);
    }
  }
}

function swap(i, j, array) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

//
// Time O(n!)
// Space O(n!)
// This solution works well with strings with duplicated chars
//
function getPermutations(string) {
  const freq = buildFreqTable(string);
  const result = [];
  getPermsHelper(freq, "", string.length, result);
  return result;
}

function getPermsHelper(freq, prefix, remaining, result) {
  // Base case, permutation has been complited
  if (remaining === 0) {
    result.push(prefix);
    return;
  }

  // Try remaining letters for next char, and generate remaining permutations
  for (const [char, count] of Object.entries(freq)) {
    if (count > 0) {
      freq[char] -= 1;
      getPermsHelper(freq, prefix + char, remaining - 1, result);
      freq[char] = count;
    }
  }
}

function buildFreqTable(string) {
  const hashTable = {};

  for (const char of string) {
    if (hashTable.hasOwnProperty(char)) {
      hashTable[char] += 1;
    } else {
      hashTable[char] = 1;
    }
  }
  return hashTable;
}

console.log(getPermutations("ab"));
