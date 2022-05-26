// TANDEM BICYCLE

const redShirtSpeeds = [5, 5, 3, 9, 2];
const blueShirtSpeeds = [3, 6, 7, 2, 1];
const fastest = false;

//tandemSpeed = Math.max(speedA, speedB);

// if fastest
// redSorted = [9, 5, 5, 3, 2]
// blueSorted = [1, 2, 3, 6, 7]
// [9,1] [5,2] [5,3] [3,6] [2,7]
// 9 + 5 + 5 + 6 + 7 = 32

// if not fastest
// redSorted = [9, 5, 5, 3, 2]
// blueSorted = [7, 6, 3, 2, 1]
// [9,7] [5,6] [5,3] [3,2] [2,1]
// 9 + 6 + 5 + 3 + 2 = 25

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  redShirtSpeeds.sort((a, b) => b - a);
  if (fastest) {
    blueShirtSpeeds.sort((a, b) => a - b);
    return sumSpeeds(blueShirtSpeeds, redShirtSpeeds);
  }
  blueShirtSpeeds.sort((a, b) => b - a);
  return sumSpeeds(blueShirtSpeeds, redShirtSpeeds);
}

function sumSpeeds(red, blue) {
  let sum = 0;
  for (let i = 0; i < red.length; i++) {
    const currentRed = red[i];
    const currentBlue = blue[i];
    sum += Math.max(currentBlue, currentRed);
  }
  return sum;
}

console.log(tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest));
