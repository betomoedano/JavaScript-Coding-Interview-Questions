/**
 * @param {string} word
 * @return {boolean}
 * Time O(n) - where n is the number of chars in word
 * Space O(1)
 */
var detectCapitalUse = function (word) {
  let left = 0;
  let right = word.length - 1;
  const leftLetter = word[left];
  const rightLetter = word[right];

  if (
    leftLetter === leftLetter.toLowerCase() &&
    rightLetter === rightLetter.toUpperCase()
  )
    return false;

  //check for uppercase
  if (
    leftLetter === leftLetter.toUpperCase() &&
    rightLetter === rightLetter.toUpperCase()
  ) {
    return allLowerOrAllUpper(word.slice(left + 1, right), true);
  } else {
    // otherwise we check that all letters are lowercase
    return allLowerOrAllUpper(word.slice(left + 1, right), false);
  }
};

function allLowerOrAllUpper(string, upper) {
  let left = 0;
  let right = string.length - 1;

  while (left <= right) {
    if (upper) {
      if (
        string[left] !== string[left].toUpperCase() ||
        string[right] !== string[right].toUpperCase()
      ) {
        return false;
      } else {
        left++;
        right--;
      }
    } else {
      if (
        string[left] !== string[left].toLowerCase() ||
        string[right] !== string[right].toLowerCase()
      ) {
        return false;
      } else {
        left++;
        right--;
      }
    }
  }
  return true;
}
