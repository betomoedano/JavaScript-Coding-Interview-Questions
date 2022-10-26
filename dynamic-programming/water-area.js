// time O(n)
// space O(n)
function waterArea(heights) {
  const maxes = new Array(heights.length).fill(0);

  let leftMax = 0;

  for (let i = 0; i < heights.length; i++) {
    const height = heights[i];
    maxes[i] = leftMax;
    leftMax = Math.max(leftMax, height);
  }

  let rightMax = 0;

  for (let i = heights.length - 1; i >= 0; i--) {
    const height = heights[i];
    const minHeight = Math.min(rightMax, maxes[i]);
    if (height < minHeight) {
      maxes[i] = minHeight - height;
    } else {
      maxes[i] = 0;
    }
    rightMax = Math.max(rightMax, height);
  }

  return maxes.reduce((a, b) => a + b, 0);
}

const heights = [0, 8, 0, 0, 5, 0, 0, 10, 0, 0, 1, 1, 0, 3];

console.log(waterArea(heights));
