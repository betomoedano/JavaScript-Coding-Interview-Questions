// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// O(n) time - where n is the total of chars in str1
// O(1) space - because at maximum we will have 26 letters in our dictionary
function scramble(str1, str2) {
  const frequencies = {};

  for (const char of str1) {
    if (char in frequencies) {
      frequencies[char] += 1;
    } else {
      frequencies[char] = 1;
    }
  }

  for (const char of str2) {
    if (frequencies.hasOwnProperty(char) && frequencies[char] > 0) {
      frequencies[char]--;
    } else {
      return false;
    }
  }
  return true;
}
