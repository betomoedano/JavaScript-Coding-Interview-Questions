/**
 * @param {number[]} nums
 * @return {number}
 * Time O(log n)
 * Space O(1)
 */
function singleNonDuplicate(nums) {
  let leftIndex = 0;
  let rightIndex = nums.length - 1;

  while (leftIndex <= rightIndex) {
    const midIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (
      midIndex === 0 ||
      midIndex === nums.length - 1 ||
      (nums[midIndex] !== nums[midIndex - 1] &&
        nums[midIndex] !== nums[midIndex + 1])
    ) {
      return nums[midIndex];
    } else if (nums[midIndex] === nums[midIndex - 1]) {
      if ((midIndex - leftIndex + 1) % 2 === 0) {
        leftIndex = midIndex + 1;
      } else {
        rightIndex = midIndex - 2;
      }
    } else {
      if ((rightIndex - midIndex + 1) % 2 === 0) {
        rightIndex = midIndex - 1;
      } else {
        leftIndex = midIndex + 2;
      }
    }
  }
}
