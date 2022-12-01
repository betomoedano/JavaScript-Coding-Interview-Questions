const balancedBrackets = require("./balanced-brackets");
test("balanced braquets [()] returns true", () => {
  expect(balancedBrackets("{([])}")).toBe(true);
});

test("balanced braquets [()]} returns false", () => {
  expect(balancedBrackets("{(])}")).toBe(false);
});

test("balanced braquets [()]) returns false", () => {
  expect(balancedBrackets("{([])})")).toBe(false);
});
