// Given a non-empty array nums containing only positive integers,
// find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.
var canPartition = function (nums) {
  if (!nums) return false;
  let total = nums.reduce((a, b) => a + b, 0);

  if (total % 2 != 0) return false;

  let target = total / 2;
  let arr = new Array(target + 1).fill(false);
  arr[0] = true;

  for (let el of nums) {
    for (let i = target; i >= 0; i--) {
      let complement = i - el;

      if (!arr[i] && arr[complement]) {
        arr[i] = true;
      }
      if (arr[target] == true) return true;
    }
  }

  return false;
};
