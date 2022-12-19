const zeroSumSubarray = require("../zero-subarray-sum");

test("there is a 0 sub sum", () => {
  expect(zeroSumSubarray([1, 2, -2])).toBe(true);
});
