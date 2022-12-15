/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// Time O(2^t) where t is the target
// Space O(2^t) where t is the target

var combinationSum = function (candidates, target) {
  const uniqueCombinations = [];
  combinationHelper(0, [], 0, target, candidates, uniqueCombinations);
  return uniqueCombinations;
};

function combinationHelper(
  index,
  currentCombination,
  totalSum,
  target,
  candidates,
  uniqueCombinations
) {
  if (totalSum === target) {
    uniqueCombinations.push(currentCombination.slice());
    return;
  }
  if (index >= candidates.length || totalSum > target) return;

  currentCombination.push(candidates[index]);
  combinationHelper(
    index,
    currentCombination,
    totalSum + candidates[index],
    target,
    candidates,
    uniqueCombinations
  );
  currentCombination.pop();
  combinationHelper(
    index + 1,
    currentCombination,
    totalSum,
    target,
    candidates,
    uniqueCombinations
  );
}

//////////////////////////////////////////////
// Combination Sum 2
// No duplicates allowed

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  let paths = [];

  find(target, [], 0, candidates, paths);

  return paths;
};

// Time O(2^n) | Space O(n)
function find(target, currPath, index, candidates, paths) {
  if (target === 0) {
    paths.push(currPath.slice());
    return;
  } else {
    while (index < candidates.length && target - candidates[index] >= 0) {
      find(
        target - candidates[index],
        [...currPath, candidates[index]],
        index + 1,
        candidates,
        paths
      );
      index++;
      while (candidates[index - 1] === candidates[index]) index++;
    }
  }
}
