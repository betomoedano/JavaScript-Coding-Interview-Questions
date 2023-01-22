// 131. Palindrome Partitioning
// Medium
// Given a string s, partition s such that every
// substring
//  of the partition is a
// palindrome
// . Return all possible palindrome partitioning of s.

// Example 1:
// Input: s = "aab"
// Output: [["a","a","b"],["aa","b"]]
// Example 2:

// Input: s = "a"
// Output: [["a"]]
/**
 * @param {string} s
 * @return {string[][]}
 * Time O(n 2^n) - worst case when every substring is a palindrome
 * Space O(n)
 */
var partition = function (string) {
  const result = [];
  dfs(0, result, [], string);
  return result;
};

function dfs(start, result, currentList, string) {
  if (start >= string.length) {
    result.push(currentList.slice());
  }
  for (let end = start; end < string.length; end++) {
    const currentSubstring = string.slice(start, end + 1);
    if (isPalindrome(currentSubstring)) {
      currentList.push(currentSubstring);
      dfs(end + 1, result, currentList, string);
      // backtrack and remove the current substring from currList
      currentList.pop();
    }
  }
}

function isPalindrome(string) {
  let left = 0;
  let right = string.length - 1;

  while (left < right) {
    if (string[left] !== string[right]) return false;
    left++;
    right--;
  }
  return true;
}
