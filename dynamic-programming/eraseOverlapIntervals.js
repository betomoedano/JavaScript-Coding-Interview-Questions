// Given an array of intervals intervals
// where intervals[i] = [starti, endi], return the minimum number of intervals you need to
// remove to make the rest of the intervals non-overlapping.

// Example 1:

// Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
// Output: 1
// Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.

const eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let res = 0;
  let prevEnd = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    if (start >= prevEnd) {
      prevEnd = end;
    } else {
      res += 1;
      prevEnd = Math.min(end, prevEnd);
    }
  }
  return res;
};
