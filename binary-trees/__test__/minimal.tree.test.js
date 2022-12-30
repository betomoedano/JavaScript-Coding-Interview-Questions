const createMinimalBST = require("../minimal-tree");

function getDfsOrder(node, values) {
  if (node === null) return;
  values.push(node.value);
  getDfsOrder(node.left, values);
  getDfsOrder(node.right, values);
  return values;
}

test("given", () => {
  expect(createMinimalBST()).toBe();
});
const array = [2, 4, 6, 8, 9, 10, 20];

console.log(createMinimalBST(array));
