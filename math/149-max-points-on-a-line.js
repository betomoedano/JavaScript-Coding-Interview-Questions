/**
 * @param {number[][]} points
 * @return {number}
 * Time O(n^2)
 * Space O(n)
 */

function maxPoints(points) {
  if (points.length <= 2) return points.length;

  let maxCount = 0;
  for (let i = 0; i < points.length; i++) {
    let slopeCount = {};
    let samePoints = 1;
    for (let j = 0; j < points.length; j++) {
      if (i === j) continue;
      if (points[i][0] === points[j][0] && points[i][1] === points[j][1]) {
        samePoints++;
        continue;
      }
      let slope = (points[i][1] - points[j][1]) / (points[i][0] - points[j][0]);
      if (slope in slopeCount) {
        slopeCount[slope]++;
      } else {
        slopeCount[slope] = 1;
      }
    }
    console.log(slopeCount);
    let count = samePoints;
    for (let slope in slopeCount) {
      count = Math.max(count, slopeCount[slope] + samePoints);
    }
    maxCount = Math.max(maxCount, count);
  }

  return maxCount;
}
