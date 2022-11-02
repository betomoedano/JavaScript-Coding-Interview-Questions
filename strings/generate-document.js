// EASY
// Time O(n + m) where n is length of chars and m length of doc
// Space O(c) c is the number of unique chars in characters string

function generateDocument(characters, document) {
  const frequencies = {};

  for (const char of characters) {
    if (char in frequencies) {
      frequencies[char]++;
      continue;
    }
    frequencies[char] = 1;
  }

  for (const char of document) {
    if (!frequencies.hasOwnProperty(char)) return false;
    if (frequencies[char] === 0) return false;
    frequencies[char] -= 1;
  }
  return true;
}
