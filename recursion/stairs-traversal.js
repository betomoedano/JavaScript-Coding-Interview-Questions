////////////////////////////////////////////
// STAIRCASE TRAVERSAL

// terrible solution
// time O(k^n) // where n is the height
// space O(n)

// function staircaseTraversal(height, maxSteps) {
//   return numberOfWaysToTop(height, maxSteps);
// }

// function numberOfWaysToTop(height, maxSteps) {
//   if (height <= 1) return 1;

//   let numberOfWays = 0;
//   for (let step = 1; step < Math.min(maxSteps, height) + 1; step++) {
//     numberOfWays += numberOfWaysToTop(height - step, maxSteps);
//   }
//   return numberOfWays;
// }
// console.log(staircaseTraversal(4, 2));

//////////////////////////////////////////
// using memoization
// time O(k * n) where k are the steps and n the height;
// space O(n)
// function staircaseTraversal(height, maxSteps) {
//   const memo = {
//     0: 1,
//     1: 1
//   };
//   return numberOfWaysToTop(height, maxSteps, memo);
// }

// function numberOfWaysToTop(height, maxSteps, memo) {
//   if (height in memo) return memo[height];

//   let numberOfWays = 0;
//   for (let step = 1; step < Math.min(maxSteps, height) + 1; step++) {
//     numberOfWays += numberOfWaysToTop(height - step, maxSteps, memo);
//   }
//   memo[height] = numberOfWays;
//   return numberOfWays;
// }
// console.log(staircaseTraversal(4, 2));

/////////////////////////////////////////
// dynamic programming
// time O(k * n) where k are the steps and n the height;
// space O(n)

// function staircaseTraversal(height, maxSteps) {
//   const waysToTop = new Array(height + 1).fill(0); // add 1 couse we are counting 0
//   waysToTop[0] = 1;
//   waysToTop[1] = 1;

//   for (let currentHeight = 2; currentHeight < height + 1; currentHeight++) {
//     let step = 1;
//     while (step <= maxSteps && step <= currentHeight) {
//       waysToTop[currentHeight] =
//         waysToTop[currentHeight] + waysToTop[currentHeight - step];
//       step++;
//     }
//   }
//   return waysToTop[height];
// }

// console.log(staircaseTraversal(4, 2));

/////////////////////////////////////////
// O(n) time
// O(n) space where n is the height of the staircase;
function staircaseTraversal(height, maxSteps) {
    let currentNumberOfWays = 0;
    const waysToTop = [1];
  
    for (let currentHeight = 1; currentHeight < height + 1; currentHeight++) {
      const startOfWindow = currentHeight - maxSteps - 1;
      const endOfWindow = currentHeight - 1;
      if (startOfWindow >= 0) currentNumberOfWays -= waysToTop[startOfWindow];
  
      currentNumberOfWays += waysToTop[endOfWindow];
      waysToTop.push(currentNumberOfWays);
    }
    return waysToTop[height];
  }
  
  console.log(staircaseTraversal(4, 3));