/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * Time O(n) where n is the number of chars in s
 * Space O(1) because t consist of lowecase english letters (23)
 */
var isAnagram = function (s, t) {
  if (t >= s.length) return false;
  const freq = {};

  for (const char of t) {
    freq.hasOwnProperty(char) ? freq[char]++ : (freq[char] = 1);
  }

  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];
    if (!freq.hasOwnProperty(currentChar)) return false;
    freq[currentChar] -= 1;
    if (freq[currentChar] === 0) {
      delete freq[currentChar];
    }
  }
  return Object.entries(freq).length === 0 ? true : false;
};
