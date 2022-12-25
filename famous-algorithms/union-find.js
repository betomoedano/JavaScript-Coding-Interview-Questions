// Do not edit the class below except for
// the constructor and the createSet, find,
// and union methods. Feel free to add new
// properties and methods to the class.

class UnionFind {
  constructor() {
    this.parents = {};
  }

  createSet(value) {
    this.parents[value] = value;
  }

  //Time O(n) - space O(1)
  find(value) {
    if (this.parents.hasOwnProperty(value)) {
      let currentParent = value;
      while (currentParent !== this.parents[currentParent]) {
        currentParent = this.parents[currentParent];
      }
      return currentParent;
    } else {
      return null;
    }
  }

  //Time O(n) - space O(1)
  union(valueOne, valueTwo) {
    if (
      this.parents.hasOwnProperty(valueOne) &&
      this.parents.hasOwnProperty(valueTwo)
    ) {
      const valueOneRoot = this.find(valueOne);
      const valueTwoRoot = this.find(valueTwo);

      this.parents[valueTwoRoot] = valueOneRoot;
    }
  }
}
