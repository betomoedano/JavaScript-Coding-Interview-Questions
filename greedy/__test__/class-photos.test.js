const classPhotos = require("../class-photos");

test("given const red = [5, 8, 1, 3, 4] const blue = [6, 9, 2, 4, 5] return true", () => {
  expect(classPhotos([5, 8, 1, 3, 4], [6, 9, 2, 4, 5])).toBe(true);
});
