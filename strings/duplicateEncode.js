// The goal of this exercise is to convert a string to a new string where each character in the new string is "("
// if that character appears only once in the original string,
//  or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Time O(n)
// Space O(n) - where n is the quantity of letters
function duplicateEncode(word) {
  const lettersSeen = {};
  const result = [];

  for (const char of word) {
    if (char.toLowerCase() in lettersSeen) {
      lettersSeen[char.toLowerCase()] += 1;
    } else {
      lettersSeen[char.toLowerCase()] = 1;
    }
  }
  for (const char of word) {
    if (lettersSeen[char.toLowerCase()] > 1) {
      result.push(")");
    } else {
      result.push("(");
    }
  }
  return result.join("");
}
