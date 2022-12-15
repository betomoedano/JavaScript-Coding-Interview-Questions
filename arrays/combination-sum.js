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
