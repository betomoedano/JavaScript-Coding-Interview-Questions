// Time O(n)
// Space O(min (n , a)) where a is the aphabet of the string
function longestSubstringWithoutDuplication(s) {
  let lastSeen = {};
  let longestSubstring = [0, 1];
  let startIdx = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] in lastSeen) {
      startIdx = Math.max(startIdx, lastSeen[s[i]] + 1);
    }
    if (longestSubstring[1] - longestSubstring[0] < i + 1 - startIdx) {
      longestSubstring = [startIdx, i + 1];
    }
    lastSeen[s[i]] = i;
  }
  return s.slice(longestSubstring[0], longestSubstring[1]);
}
