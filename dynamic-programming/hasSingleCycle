///////////////////////////////////////////////////////////////
// HAS SINGLE CYCLE

// time O(n)
// space O(1)

function hasSingleCycle(array) {
  let numElementsVisited = 0;
  let currentIdx = 0;

  while (numElementsVisited < array.length) {
    if (numElementsVisited > 0 && currentIdx === 0) return false;
    numElementsVisited++;
    currentIdx = getNextIdx(currentIdx, array);
  }
  return currentIdx === 0;
}

function getNextIdx(currentIdx, array) {
  const jump = array[currentIdx];
  const nextIdx = (currentIdx + jump) % array.length;
  return nextIdx >= 0 ? nextIdx : nextIdx + array.length;
}

const array = [2, 3, 1, -4, -4, 2];
console.log(hasSingleCycle(array));

