// time O(n log n) because we need to sorted the array
// space O(1)
function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  let totalSpeed = 0;
  redShirtSpeeds.sort((a, b) => b - a);
  if (fastest) {
    blueShirtSpeeds.sort((a, b) => a - b);
    totalSpeed += getTotalSpeedHelper(redShirtSpeeds, blueShirtSpeeds);
  } else {
    blueShirtSpeeds.sort((a, b) => b - a);
    totalSpeed += getTotalSpeedHelper(redShirtSpeeds, blueShirtSpeeds);
  }
  return totalSpeed;
}

function getTotalSpeedHelper(redShirtSpeeds, blueShirtSpeeds) {
  let totalSpeed = 0;
  for (const idx in redShirtSpeeds) {
    const blueSpeed = blueShirtSpeeds[idx];
    const redSpeed = redShirtSpeeds[idx];
    if (blueSpeed > redSpeed) {
      totalSpeed += blueSpeed;
    } else {
      totalSpeed += redSpeed;
    }
  }
  return totalSpeed;
}

const redShirtSpeeds = [5, 5, 3, 9, 2];
const blueShirtSpeeds = [3, 6, 7, 2, 1];
const fastest = true;

console.log(tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest));
