const possibleBipartition = require("../possible-bipartition");

test("Given input: n = 4, dislikes = [[1,2],[1,3],[2,4]], result: true", () => {
  expect(
    possibleBipartition(4, [
      [1, 2],
      [1, 3],
      [2, 4],
    ])
  ).toBe(true);
});

test("Given input: n = 5, dislikes = [[1,2],[2,3],[3,4],[4,5],[1,5]], result: false", () => {
  expect(
    possibleBipartition(5, [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [1, 5],
    ])
  ).toBe(false);
});
