/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

// Optimal Solution O(n) Time | O(n) Space
var dailyTemperatures = function (temperatures) {
  const answer = new Array(temperatures.length);
  const stack = [];

  for (let i = temperatures.length - 1; i >= 0; i--) {
    while (temperatures[i] >= temperatures[stack[stack.length - 1]])
      stack.pop();
    if (stack.length === 0) {
      answer[i] = 0;
    } else {
      answer[i] = stack[stack.length - 1] - i;
    }
    stack.push(i);
  }
  return answer;
};

// Brute Force O(n^2)
// var dailyTemperatures = function(temperatures) {
//   const answer = [];
//    for (let i = 0; i < temperatures.length; i++) {
//       const current = temperatures[i];
//       let j = i + 1;
//       let daysToWait = 0;
//       while (j < temperatures.length) {
//         const next = temperatures[j];
//         if (current < next) {
//           daysToWait++;
//           answer[i] = daysToWait;
//           break;
//         } else {
//           j++;
//           daysToWait++;
//           answer[i] = 0;
//         }
//       }
//    }
//    answer.push(0);
//    return answer;
// };
