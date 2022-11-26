// hard
// Time O(n)
// Space O(n)
function maximizeExpression(array) {
  if (array.length < 4) return 0;

  const A = new Array(1).fill(array[0]);
  const AB = new Array(1).fill(-Infinity);
  const ABC = new Array(2).fill(-Infinity);
  const ABCD = new Array(3).fill(-Infinity);

  for (let idx = 1; idx < array.length; idx++) {
    const currentMax = Math.max(A[idx - 1], array[idx]);
    A.push(currentMax);
  }
  for (let idx = 1; idx < array.length; idx++) {
    const currentMax = Math.max(AB[idx - 1], A[idx - 1] - array[idx]);
    AB.push(currentMax);
  }
  for (let idx = 2; idx < array.length; idx++) {
    const currentMax = Math.max(ABC[idx - 1], AB[idx - 1] + array[idx]);
    ABC.push(currentMax);
  }
  for (let idx = 3; idx < array.length; idx++) {
    const currentMax = Math.max(ABCD[idx - 1], ABC[idx - 1] - array[idx]);
    ABCD.push(currentMax);
  }

  return ABCD[ABCD.length - 1];
}
