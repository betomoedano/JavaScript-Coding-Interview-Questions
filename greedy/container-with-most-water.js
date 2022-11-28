// Time O(n)
// Space O(1)
var maxArea = function (heights) {
  if (heights.length <= 1) return 0;
  let currentMax = 0;
  let left = 0;
  let right = heights.length - 1;

  while (left < right) {
    const currentLeft = heights[left];
    const currentRight = heights[right];
    const distance = right - left;
    const potentialMaxHeight = distance * Math.min(currentLeft, currentRight);
    currentMax = Math.max(potentialMaxHeight, currentMax);
    if (currentLeft <= currentRight) {
      left++;
    } else {
      right--;
    }
  }

  return currentMax;
  // currentMax = 49;
  //  0 1 2 3 4 5 6 7 8
  // [1,8,6,2,5,4,8,3,7] = 9 elements
  // [1               7] = maximum Water =  8 - 0  * min(left, right) = 8
  // [  8             7] = 8 - 1 = 7 * 7 = 49
  // [  8           3  ] = 7 - 1 = 6 * 36
  // [  8         8    ] = 6 - 1 = 5 *  8 = 40
  // [    6       8    ] = 6 - 2 = 4 *  6 = 24
  // [     2      8    ] = 6 - 3 = 3 * 2 = 6;
  // [       5    8    ] = 6 - 4 = 2 * 5 = 10;
  // [         4 8     ] = 6 - 5 = 1 * 4 = 4;
  // return 49
};
