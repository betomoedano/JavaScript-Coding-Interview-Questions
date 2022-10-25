class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  insert(values, i = 0) {
    if (i >= values.length) return;
    const queue = [this];
    while (queue.length > 0) {
      let current = queue.shift();
      if (current.left === null) {
        current.left = new BinaryTree(values[i]);
        break;
      }
      queue.push(current.left);
      if (current.right === null) {
        current.right = new BinaryTree(values[i]);
        break;
      }
      queue.push(current.right);
    }
    this.insert(values, i + 1);
    return this;
  }
}

// time O(n) where n is the number of nodes
// space O(n)
function branchSums(root) {
  return branchSumsHelper(root, 0, (sums = []));
}

function branchSumsHelper(root, currentSum, sums) {
  if (root !== null) {
    if (root.left === null && root.right === null) {
      sums.push(currentSum + root.value);
    }
    branchSumsHelper(root.left, currentSum + root.value, sums);
    branchSumsHelper(root.right, currentSum + root.value, sums);
  }
  return sums;
}

const tree = new BinaryTree(1).insert([2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log(branchSums(tree));
