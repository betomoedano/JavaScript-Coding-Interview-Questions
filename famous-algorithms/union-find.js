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

//
// SOLUTION 2
// OPTIMAL SOLUTION
//
class UnionFind {
  constructor() {
    this.parents = {};
    this.ranks = {};
  }

  createSet(value) {
    this.parents[value] = value;
    this.ranks[value] = 0;
  }

  // O(alpha(n)), approximately O(1) time and space
  // where n is the total numbe of values
  find(value) {
    if (!(value in this.parents)) return null;

    // if the parent is different to the value
    // find parent calling find recursively
    if (value !== this.parents[value]) {
      this.parents[value] = this.find(this.parents[value]);
    }

    return this.parents[value];
  }

  // O(alpha(n)), approximately O(1) time and space
  // where n is the total numbe of values
  union(valueOne, valueTwo) {
    if (!(valueOne in this.parents) || !(valueTwo in this.parents)) return;

    const valueOneRoot = this.find(valueOne);
    const valueTwoRoot = this.find(valueTwo);
    if (this.ranks[valueOneRoot] < this.ranks[valueTwoRoot]) {
      this.parents[valueOneRoot] = valueTwoRoot;
    } else if (this.ranks[valueOneRoot] > this.ranks[valueTwoRoot]) {
      this.parents[valueTwoRoot] = valueOneRoot;
    } else {
      this.parents[valueTwoRoot] = valueOneRoot;
      this.ranks[valueOneRoot] += 1;
    }
  }
}
