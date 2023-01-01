/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 * Time O(n)
 * Space O(2n) => O(n)
 */
var wordPattern = function (pattern, s) {
  const words = s.split(" ");
  const keys = {};
  const values = {};

  if (words.length !== pattern.length) return false;
  for (let i = 0; i < words.length; i++) {
    const currentWord = words[i];
    const currentPattern = pattern[i];
    if (
      !keys.hasOwnProperty(currentPattern) &&
      !values.hasOwnProperty(currentWord)
    ) {
      keys[currentPattern] = currentWord;
      values[currentWord] = currentPattern;
    } else if (
      keys[currentPattern] !== currentWord ||
      values[currentWord] !== currentPattern
    ) {
      return false;
    }
  }
  return true;
};
