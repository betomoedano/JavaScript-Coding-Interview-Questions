// SUM OF LINKED LIST

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  addMany(values) {
    let current = this;
    while (current.next !== null) {
      current = current.next;
    }
    for (const value of values) {
      current.next = new LinkedList(value);
      current = current.next;
    }
    return this;
  }
}

// SOLUTION 1  | TIME O(n + m)  | Space O(n + m)
// where n is the number of values on the linked list

// function sumOfLinkedLists(linkedListOne, linkedListTwo) {
//   const valueOfll1 = getNumber(linkedListOne);
//   const valueOfll2 = getNumber(linkedListTwo);

//   let sumValue = valueOfll1 + valueOfll2;
//   sumValue = sumValue.toString().split("");
//   let sumValueInt = [];

//   for (let i = sumValue.length - 1; i >= 0; i--) {
//     sumValueInt.push(parseInt(sumValue[i]));
//   }

//   return new LinkedList(sumValueInt[0]).addMany(sumValueInt.slice(1));
// }

// function getNumber(linkedList) {
//   const value = [];
//   let current = linkedList;

//   while (current !== null) {
//     value.unshift(current.value);
//     current = current.next;
//   }
//   return parseInt(value.join(""));
// }

// Solution 2 | Time O(max(n, m)) | Space O(max(n, m));
// better solution

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  // this variable will store a dummy node whose .next
  // attribute will point to the head of our new LL

  const newLinkedListHeadPointer = new LinkedList(0);
  let currentNode = newLinkedListHeadPointer;
  let carry = 0;

  let nodeOne = linkedListOne;
  let nodeTwo = linkedListTwo;
  while (nodeOne !== null || nodeTwo !== null || carry !== 0) {
    const valueOne = nodeOne !== null ? nodeOne.value : 0;
    const valueTwo = nodeTwo !== null ? nodeTwo.value : 0;
    const sumOfValues = valueOne + valueTwo + carry;

    const newValue = sumOfValues % 10;
    const newNode = new LinkedList(newValue);
    currentNode.next = newNode;
    currentNode = newNode;

    carry = Math.floor(sumOfValues / 10);
    nodeOne = nodeOne !== null ? nodeOne.next : null;
    nodeTwo = nodeTwo !== null ? nodeTwo.next : null;
  }

  return newLinkedListHeadPointer.next;
}

const ll1 = new LinkedList(2).addMany([4, 7, 1]);
const ll2 = new LinkedList(9).addMany([4, 5]);

console.log(sumOfLinkedLists(ll1, ll2));
