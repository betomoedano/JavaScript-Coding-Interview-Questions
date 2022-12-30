const { Node, createMinimalBST } = require("../minimal-tree");

function getDfsOrder(node, values) {
  if (node === null) return;
  values.push(node.value);
  getDfsOrder(node.left, values);
  getDfsOrder(node.right, values);
  return values;
}

test(`Given
array = [2, 4, 6, 8, 9, 10, 20]
expect = const tree = new Node(8);
  tree.left = new Node(4);
  tree.left.left = new Node(2);
  tree.left.right = new Node(6);
  tree.right = new Node(10);
  tree.right.right = new Node(20);
  tree.right.left = new Node(9);
`, () => {
  const array = [2, 4, 6, 8, 9, 10, 20];
  const tree = new Node(8);
  tree.left = new Node(4);
  tree.left.left = new Node(2);
  tree.left.right = new Node(6);
  tree.right = new Node(10);
  tree.right.right = new Node(20);
  tree.right.left = new Node(9);
  const expected = getDfsOrder(tree, []);
  const actual = createMinimalBST(array);
  const actualDfsOrder = getDfsOrder(actual, []);
  expect(actualDfsOrder).toEqual(expected);
});
