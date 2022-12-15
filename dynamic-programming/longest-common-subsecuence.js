// with matrix
// Time O(nm)
// Space O(nm)
var longestCommonSubsequence = function (text1, text2) {
  const lcs = [];

  for (let i = 0; i < text1.length + 1; i++) {
    const row = new Array(text2.length + 1).fill(0);
    lcs.push(row);
  }

  for (let i = 1; i < text1.length + 1; i++) {
    for (let j = 1; j < text2.length + 1; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        lcs[i][j] = lcs[i - 1][j - 1] + 1;
      } else {
        lcs[i][j] = Math.max(lcs[i - 1][j], lcs[i][j - 1]);
      }
    }
  }
  return lcs[text1.length][text2.length];
};

// Add memoization
// Time O(mn)
// Space O(nm)

function LCS(i, j, a, b, memo) {
  let key = i.toString() + "_" + j.toString();
  if (key in memo) {
    return memo[key];
  }
  if (i >= a.length || j >= b.length) {
    return 0;
  } else if (a[i] === b[j]) {
    memo[key] = 1 + LCS(i + 1, j + 1, a, b, memo);
  } else {
    memo[key] = Math.max(LCS(i + 1, j, a, b, memo), LCS(i, j + 1, a, b, memo));
  }
  return memo[key];
}

// This is a pretty terrible solution
// Time O(2^n)
function longestCommonSubstring(string1, string2) {
  return LCS(0, 0, string1, string2);
}

function LCS(i, j, a, b) {
  if (i >= a.length || j >= b.length) {
    return 0;
  } else if (a[i] === b[j]) {
    return 1 + LCS(i + 1, j + 1, a, b);
  } else {
    return Math.max(LCS(i + 1, j, a, b), LCS(i, j + 1, a, b));
  }
}

const string1 = "beto";
const string2 = "codewithbeto";

console.log(longestCommonSubstring(string1, string2));
