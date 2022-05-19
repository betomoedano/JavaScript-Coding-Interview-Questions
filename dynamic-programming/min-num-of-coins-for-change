// MIN NUM OF COINS FOR CHANGE

function minNumberOfCoinsForChange(n, denoms) {
  const nums = new Array(n + 1).fill(Infinity);
  nums[0] = 0;

  for (let denom of denoms) {
    for (let num = 0; num < n + 1; num++) {
      if (denom <= num) {
        nums[num] = Math.min(nums[num], nums[num - denom] + 1);
      }
    }
  }
  return nums[n] !== Infinity ? nums[n] : -1;
}

const n = 6;
const denoms = [1, 2, 4];

console.log(minNumberOfCoinsForChange(n, denoms));

