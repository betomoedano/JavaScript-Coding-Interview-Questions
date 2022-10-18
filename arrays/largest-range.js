// time O(n)
// space O(n)
function largestRange(array) {
  const dic = {};
  let bestRange = [];
  let longesLenght = 0;

  for (const num of array) {
    dic[num] = true;
  }

  for (const num of array) {
    if (!dic[num]) continue;
    dic[num] = false;
    let currentLenght = 1;
    let left = num - 1;
    let right = num + 1;
    while (left in dic) {
      dic[left] = false;
      currentLenght++;
      left--;
    }
    while (right in dic) {
      dic[right] = false;
      currentLenght++;
      right++;
    }
    if (currentLenght > longesLenght) {
      longesLenght = currentLenght;
      bestRange = [left + 1, right - 1];
    }
  }
  return bestRange;
}

const array = [1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6];

console.log(largestRange(array));
