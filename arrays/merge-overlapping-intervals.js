// Time O(n log n)
// Space O(n) where n is the length of the imput array

function mergeOverlappingIntervals(array) {
  array.sort((a, b) => a[0] - b[0]);
  const result = [];

  let currentInterval = array[0];
  result.push(currentInterval);

  for (const nextInterval of array) {
    const [_, currentIntervalEnd] = currentInterval;
    const [nextIntervalStart, nextIntervalEnd] = nextInterval;

    if (currentIntervalEnd >= nextIntervalStart)
      currentInterval[1] = Math.max(currentIntervalEnd, nextIntervalEnd);
    else {
      currentInterval = nextInterval;
      result.push(currentInterval);
    }
  }
  return result;
}
