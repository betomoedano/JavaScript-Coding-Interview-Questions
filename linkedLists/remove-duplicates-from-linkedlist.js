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
