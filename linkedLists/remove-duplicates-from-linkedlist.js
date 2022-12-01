/**
 *
 * @param {LinkedList} myLinked
 * @returns {LinkedList}
 */
// my solution
// Time O(n) - where n is the number of elements
// Space O(n)
function removeDuplicates(myLinked) {
  if (myLinked === null) return;
  const frequencies = {};

  let prevNode = null;
  let currentNode = myLinked;

  while (currentNode !== null) {
    if (frequencies.hasOwnProperty(currentNode.value)) {
      prevNode.next = currentNode.next;
    } else {
      frequencies[currentNode.value] = currentNode.value;
      prevNode = currentNode;
    }
    currentNode = currentNode.next;
  }
  return myLinked;
}

/**
 * Using the "Runner" technique
 * Time O(n^2)
 * Space O(1)
 */
function removeDuplicates(myLinked) {
  let currentNode = myLinked;
  while (currentNode !== null) {
    let runner = currentNode;
    while (runner.next !== null) {
      if (runner.next.value === currentNode.value) {
        runner.next = runner.next.next;
      } else {
        runner = runner.next;
      }
    }
    currentNode = currentNode.next;
  }
  return myLinked;
}

// time O(n) where n is the number of nodes
// space O(1)
function removeDuplicatesFromLinkedList(linkedList) {
  let current = linkedList;

  while (current !== null) {
    let currentDistinct = current.next;
    while (
      currentDistinct !== null &&
      current.value === currentDistinct.value
    ) {
      currentDistinct = currentDistinct.next;
    }
    current.next = currentDistinct;
    current = current.next;
  }
  return linkedList;
}

const input = new LinkedList(1).addMany([1, 3, 4, 4, 4, 5, 6, 6]);

console.log(input.getNodesInArray());
console.log(removeDuplicatesFromLinkedList(input));
console.log(input.getNodesInArray());
