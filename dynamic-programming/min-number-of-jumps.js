// O(n) Time | O(1) space
function minNumberOfJumps(array) {
  if (array.length === 1) return 0;

  let jumps = 0;
  let maxReach = array[0];
  let steps = array[0];

  for (let i = 1; i < array.length - 1; i++) {
    maxReach = Math.max(maxReach, i + array[i]);
    steps--;
    if (steps === 0) {
      jumps++;
      steps = maxReach - i;
    }
  }
  return jumps + 1;
}
