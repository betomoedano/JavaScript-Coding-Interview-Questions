// The string "PAYPALISHIRING" is written in a
// zigzag pattern on a given number of rows like this: (you may want to display this pattern
// in a fixed font for better legibility)
// Time O(n)
// Space O(n)
var convert = function (s, numRows) {
  if (numRows === 1) return s;
  let res = "";
  let jump = (numRows - 1) * 2;

  for (let row = 0; row < numRows; row++) {
    for (let i = row; i < s.length; i += jump) {
      res += s[i];
      if (row > 0 && row < numRows - 1 && i + jump - 2 * row < s.length) {
        res += s[i + jump - 2 * row];
      }
    }
  }
  return res;
};
