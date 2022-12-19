// Time O(n) | Space O(n) - where n is the length of nums
function zeroSumSubarray(nums) {
  const set = new Set([0]);
  let currSum = 0;

  for (let num of nums) {
    currSum += num;
    if (set.has(currSum)) return true;
    set.add(currSum);
  }
  return false;
}

module.exports = zeroSumSubarray;
