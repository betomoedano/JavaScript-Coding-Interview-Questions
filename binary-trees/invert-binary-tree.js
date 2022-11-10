function invertBinaryTree(tree) {
  if (tree === null) return;
  const temp = tree.left;
  tree.left = tree.right;
  tree.right = temp;
  invertBinaryTree(tree.left);
  invertBinaryTree(tree.right);
}
