function searchRange(nums, target) {
  if (nums.length === 0) return [-1, -1];

  let leftPointer = 0;
  let rightPointer = nums.length - 1;
  let middlePointer = Math.floor((leftPointer + rightPointer) / 2);

  if (nums[leftPointer] === target && nums[rightPointer] === target) {
    return [leftPointer, rightPointer];
  }
  while (leftPointer <= rightPointer) {
    middlePointer = Math.floor((leftPointer + rightPointer) / 2);
    if (nums[middlePointer] === target) {
      const result = getStartingAndEnding(middlePointer, nums, target);
      return result;
    }
    if (nums[middlePointer] < target) {
      leftPointer = middlePointer + 1;
    } else {
      rightPointer = middlePointer - 1;
    }
  }
  return [-1, -1];
}

function getStartingAndEnding(startingIdx, nums, target) {
  let leftIdx = startingIdx;
  let rightIdx = startingIdx;
  while (nums[leftIdx] === target && leftIdx >= 0) leftIdx--;
  while (nums[rightIdx] === target && rightIdx < nums.length) rightIdx++;
  return [leftIdx + 1, rightIdx - 1];
}
