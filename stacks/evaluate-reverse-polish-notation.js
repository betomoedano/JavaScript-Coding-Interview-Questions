/**
 * @param {string[]} tokens
 * @return {number}
 */
// Time O(n)
// Space O(n)
var evalRPN = function (tokens) {
  const operations = ["+", "-", "/", "*"];
  const stack = [];
  for (const token of tokens) {
    if (operations.includes(token)) {
      updateStack(token, stack);
    } else {
      stack.push(Number(token));
    }
  }
  return stack[0];
};

function updateStack(operation, stack) {
  const secondNumber = stack.pop();
  const firstNumber = stack.pop();
  if (operation === "+") {
    stack.push(firstNumber + secondNumber);
  } else if (operation === "-") {
    stack.push(firstNumber - secondNumber);
  } else if (operation === "*") {
    stack.push(firstNumber * secondNumber);
  } else if (operation === "/") {
    stack.push(Math.floor((firstNumber / secondNumber) | 0)); // add "| 0" to eliminate Infinity's
  }
}
