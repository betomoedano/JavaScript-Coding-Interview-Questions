// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Time O(n)
// Space O(1)
function linkedListPalindrome(head) {
  if (!head) return false;
  if (head.next === null) return true;

  const listLength = getLength(head);
  const middle = Math.floor(listLength / 2);
  let listOneEnd = middle;
  let listTwoStart = middle + 1;
  let currentNode = head;
  let secondHalfHead = null;

  if (listLength % 2 !== 0) {
    listOneEnd = middle - 1;
    listTwoStart = middle + 1;
  }

  for (let i = 1; i <= listLength; i++) {
    if (i >= listTwoStart) {
      secondHalfHead = reverseList(currentNode);
      console.log(secondHalfHead);
      break;
    }
    currentNode = currentNode.next;
  }

  let firstHalfHead = head;
  for (let i = 1; i <= listOneEnd; i++) {
    if (firstHalfHead.value !== secondHalfHead.value) return false;
    firstHalfHead = firstHalfHead.next;
    secondHalfHead = secondHalfHead.next;
  }
  return true;
}

function reverseList(node) {
  let newHead = node;

  let prevNode = null;
  let currentNode = node;
  let nextNode = currentNode.next;

  while (currentNode !== null) {
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
    nextNode = nextNode !== null ? nextNode.next : null;

    if (nextNode === null) {
      newHead = prevNode;
    }
  }
  return newHead;
}

function getLength(head) {
  let length = 0;
  let currentNode = head;

  while (currentNode !== null) {
    length++;
    currentNode = currentNode.next;
  }
  return length;
}
