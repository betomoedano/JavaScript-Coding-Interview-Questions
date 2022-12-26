/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  var size = nums.length;
  var step = nums[0];
  for (var i = 1; i < size; ++i) {
    step--;
    if (step < 0) {
      return false;
    }
    if (nums[i] > step) {
      step = nums[i];
    }
  }
  return true;
};
