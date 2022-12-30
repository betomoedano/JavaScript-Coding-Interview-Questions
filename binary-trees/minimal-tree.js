/**
 * MINIMAL TREE
 * Given a sorted (increasing order) array with unique integer values,
 * write an algorithm to create a binary search tree (BST) with
 * minimal height
 *
 * Time O(n) - where n is the length of the input array
 * Space O(n)
 */

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function createMinimalBST(arr) {
  return createMinimalBSTHelper(arr, 0, arr.length - 1);
}

function createMinimalBSTHelper(arr, start, end) {
  if (end < start) return null;

  const middle = Math.floor((start + end) / 2);

  const node = new Node(arr[middle]);
  node.left = createMinimalBSTHelper(arr, start, middle - 1);
  node.right = createMinimalBSTHelper(arr, middle + 1, end);
  return node;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(createMinimalBST(array));
