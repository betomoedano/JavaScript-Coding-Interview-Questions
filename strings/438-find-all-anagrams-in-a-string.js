/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
//
// Time O(n*m) where m is the length of p and n is the length of s
// Space O(p) because we are duplicating the freq obj
//
var findAnagrams = function (s, p) {
  if (p.length > s.length) return [];

  const freq = {};
  const result = [];

  for (const char of p) {
    if (!freq.hasOwnProperty(char)) {
      freq[char] = 1;
    } else {
      freq[char] += 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (checkAnagram(i, i + p.length - 1, s, freq)) {
      result.push(i);
    }
  }

  return result;
};

//
// Time O(p) where p is the length of p
// Space O(p) because we are duplicating the freq obj
//
function checkAnagram(start, end, string, freq) {
  if (end >= string.length) return false;
  const freqCopy = { ...freq };

  for (let i = start; i <= end; i++) {
    const currentChar = string[i];
    if (!freqCopy.hasOwnProperty(currentChar)) return false;
    freqCopy[currentChar] -= 1;
    if (freqCopy[currentChar] === 0) {
      delete freqCopy[currentChar];
    }
  }
  return Object.entries(freqCopy).length === 0 ? true : false;
}
