// function nodeDepths(root, depth = 0) {
//   if (root === null) return 0;
//   return (
//     depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1)
//   );
// }

// O(n) time where n is the number of nodes
// O(h) space where h is the height of the tree, because at most we are storing h items on the stack
function nodeDepths(root) {
  let sum = 0;
  const stack = [{ node: root, depth: 0 }];

  //DFS
  while (stack.length > 0) {
    const currentNode = stack.pop();
    const { node, depth } = currentNode;

    if (node === null) continue;
    sum += depth;
    stack.push({ node: node.left, depth: depth + 1 });
    stack.push({ node: node.right, depth: depth + 1 });
  }
  return sum;
}

const root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.left.left = new BinaryTree(4);
root.left.left.left = new BinaryTree(8);
root.left.left.right = new BinaryTree(9);
root.left.right = new BinaryTree(5);
root.right = new BinaryTree(3);
root.right.left = new BinaryTree(6);
root.right.right = new BinaryTree(7);

console.log(nodeDepths(root));
