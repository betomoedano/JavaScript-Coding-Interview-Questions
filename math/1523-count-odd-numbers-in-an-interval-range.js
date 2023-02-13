// Approach
// We know that the number of odd numbers between x - y is (y - x) / 2

// For example [3, 4, 5, 6, 7] is 7 - 3 = 4 we have4 numbers between 3 - 7 excluding 7. And we know that we have an odd number everyother number, that's why we divide by 2; The result would be 4 / 2 = 2 and because we are exlcuding the last number we need to add 1 so the final result would be 3
// Complexity
// Time complexity:
// O(1)

// Space complexity:
// O(1)
/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

// Time O(1)
// Space O(1)
var countOdds = function (low, high) {
  //check if the low number is pair, if it is then increase one to make it odd.
  if (low % 2 === 0) low++;
  // If low is greater that high return 0
  // else apply formula
  return low > high ? 0 : Math.floor((high - low) / 2) + 1;
};

// Brute force solution
// Time O(high - low)
// Space O(1)

// var countOdds = function(low, high) {
//   let count = 0;

//   for (let i = low; i <= high; i++) {
//     if (i % 2 === 1) count++;
//   }
//   return count;
// };
