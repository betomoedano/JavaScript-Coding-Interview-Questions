/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 * Time O(n log n)
 * Space O(1)
 */

function shipWithinDays(weights, days) {
  let totalWeight = 0;
  let maxWeight = 0;
  for (let weight of weights) {
    totalWeight += weight;
    maxWeight = Math.max(maxWeight, weight);
  }

  let left = maxWeight;
  let right = totalWeight;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (canShipInDays(weights, mid, days)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

function canShipInDays(weights, capacity, days) {
  let daysNeeded = 1;
  let currentLoad = 0;
  for (let weight of weights) {
    currentLoad += weight;
    if (currentLoad > capacity) {
      daysNeeded++;
      currentLoad = weight;
    }
  }
  return daysNeeded <= days;
}
