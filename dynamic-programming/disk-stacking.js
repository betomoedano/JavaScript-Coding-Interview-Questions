// Time O(n^2)
// Space O(n)
function diskStacking(disks) {
  disks.sort((a, b) => a[2] - b[2]);
  const heights = disks.map((disk) => disk[2]);
  const sequences = new Array(disks.length).fill(-1);
  let maxHeightIdx = 0;

  for (let i = 1; i < disks.length; i++) {
    for (let j = 0; j < i; j++) {
      const [currentWidth, currentDepth, currentHeight] = disks[i];
      const [otherWidth, otherDepth, otherHeight] = disks[j];

      if (
        otherWidth < currentWidth &&
        otherDepth < currentDepth &&
        otherHeight < currentHeight
      ) {
        if (heights[i] <= currentHeight + heights[j]) {
          heights[i] = currentHeight + heights[j];
          sequences[i] = j;
        }
      }
    }
    if (heights[i] >= heights[maxHeightIdx]) {
      maxHeightIdx = i;
    }
  }
  return buildSequence(disks, sequences, maxHeightIdx);
}

function buildSequence(array, sequences, currentIdx) {
  const sequence = [];
  while (currentIdx !== -1) {
    sequence.push(array[currentIdx]);
    currentIdx = sequences[currentIdx];
  }
  return sequence.reverse();
}
