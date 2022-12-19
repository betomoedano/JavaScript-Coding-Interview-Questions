const zeroSumSubarray = require("../zero-subarray-sum");

test("given [1, 2, -2] return true", () => {
  expect(zeroSumSubarray([1, 2, -2])).toBe(true);
});

test("given [] return false", () => {
  expect(zeroSumSubarray([])).toBe(false);
});

test("given [0] return true", () => {
  expect(zeroSumSubarray([0])).toBe(true);
});
test("given [-8, -22, 104, 73, -120, 53, 22, 20, 25, -12, 1, 14, -90, 13, -22] return true", () => {
  expect(
    zeroSumSubarray([
      -8, -22, 104, 73, -120, 53, 22, 20, 25, -12, 1, 14, -90, 13, -22,
    ])
  ).toBe(true);
});
