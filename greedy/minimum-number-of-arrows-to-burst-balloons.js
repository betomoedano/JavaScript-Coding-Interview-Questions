/**
 * @param {number[][]} points
 * @return {number}
 * Time O(n log n) - because we are sorting the points
 * Space O(1)
 */
var findMinArrowShots = function (points) {
  if (points.length === 1) return 1;
  points.sort((a, b) => a[1] - b[1]);
  let minArrows = 1;
  let currMaxEnding = points[0][1];

  for (const [currStart, currEnd] of points) {
    if (currStart <= currMaxEnding && currMaxEnding >= currStart) continue;
    minArrows++;
    currMaxEnding = currEnd;
  }

  return minArrows;
};
