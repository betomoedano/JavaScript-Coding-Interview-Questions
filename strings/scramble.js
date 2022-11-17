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
