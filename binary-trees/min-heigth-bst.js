// time O(n) where n is the lenght of the array;
// space O(n)
function minHeightBst(array) {
  return minHeightHelper(array, 0, array.length - 1);
}

function minHeightHelper(array, startIdx, endIdx) {
  if (endIdx < startIdx) return null;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  const bst = new BST(array[middleIdx]);
  bst.left = minHeightHelper(array, startIdx, middleIdx - 1);
  bst.right = minHeightHelper(array, middleIdx + 1, endIdx);
  return bst;
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}
