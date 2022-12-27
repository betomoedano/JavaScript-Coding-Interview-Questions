/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 * Time O(n log n)
 * Space O(1) - We modify the input array to save some space
 */
var maximumBags = function (capacity, rocks, additionalRocks) {
  for (let i = 0; i < capacity.length; i++) {
    rocks[i] = capacity[i] - rocks[i];
  }
  rocks.sort((a, b) => a - b);
  let bags = 0;

  for (let i = 0; i < capacity.length; i++) {
    if (rocks[i] > 0 && additionalRocks > 0 && rocks[i] <= additionalRocks) {
      bags++;
      additionalRocks -= rocks[i];
      continue;
    }
    if (rocks[i] === 0) bags++;
  }
  return bags;
};
