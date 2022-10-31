// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
// time O(4^n / √n)
// space O(4^n / √n)
var generateParenthesis = function (n) {
  const result = [];
  const currentCombination = [];

  function backtrackHelper(openNumber, closedNumber) {
    if (openNumber + closedNumber === n * 2) {
      result.push(currentCombination.join(""));
      return;
    }
    if (openNumber < n) {
      currentCombination.push("(");
      backtrackHelper(openNumber + 1, closedNumber);
      currentCombination.pop();
    }
    if (closedNumber < openNumber) {
      currentCombination.push(")");
      backtrackHelper(openNumber, closedNumber + 1);
      currentCombination.pop();
    }
  }

  backtrackHelper(0, 0);
  return result;
};

console.log(generateParenthesis(3));
