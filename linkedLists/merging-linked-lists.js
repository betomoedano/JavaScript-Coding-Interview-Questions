// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 *
 * @param {*} linkedListOne
 * @param {*} linkedListTwo
 * @returns {LinkedList}
 * This solution uses extra space
 * Time O(n + m) | Space O(n + m)
 */
function mergingLinkedLists(linkedListOne, linkedListTwo) {
  const listOneArray = getListArray(linkedListOne);
  const listTwoArray = getListArray(linkedListTwo);

  let intersectionNode = null;
  const shortestList =
    listOneArray.length > listTwoArray.length ? listTwoArray : listOneArray;
  for (let i = 0; i < shortestList.length; i++) {
    if (i === 0 && listOneArray[i].value !== listTwoArray[i].value) return null;
    if (listOneArray[i].value === listTwoArray[i].value) {
      intersectionNode = listOneArray[i];
    }
  }

  return intersectionNode;
}

function getListArray(list) {
  let currentNode = list;
  const reversedArray = [];

  while (currentNode !== null) {
    reversedArray.unshift(currentNode);
    currentNode = currentNode.next;
  }
  return reversedArray;
}
