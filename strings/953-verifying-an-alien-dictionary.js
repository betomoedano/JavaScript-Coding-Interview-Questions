/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 * Time O(n * m) - where n is the number of words and m is the word with most chars
 * Space O(1)
 */
var isAlienSorted = function (words, order) {
  // first we check if the words array is less than or equal to 1 (early return)
  if (words.length <= 1) return true;

  // we iterate over each word starting at index 1 and compare two words at each iteration
  for (let i = 1; i < words.length; i++) {
    if (!compareWords(words[i - 1], words[i], order)) return false;
  }
  return true;
};

// this helper function checks that these two words are sorted by chcking the index of each letter in the order string
function compareWords(word1, word2, order) {
  for (let i = 0; i < word1.length; i++) {
    // if leeters are equal we continue
    if (word1[i] === word2[i]) {
      continue;
      // if index of letter one is greater than index of letter two return false
    } else if (order.indexOf(word1[i]) > order.indexOf(word2[i])) {
      return false;
    } else {
      // otherwise return true (they are sorted)
      return true;
    }
  }
  // if we did't hit any validation return true this means the words are valid
  return true;
}
