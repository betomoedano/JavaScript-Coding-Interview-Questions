/////////////////////////////////////////////////////////////////////////////
// NUMBER OF WAYS TO MAKE CHANGE 

function numberOfWaysToMakeChange(n, denoms) {
  const ways = new Array(n + 1).fill(0);
  ways[0] = 1;
  console.log(ways);

  for (let denom of denoms) {
    for (let amount = 1; amount < n + 1; amount++) {
      if (denom <= amount) {
        ways[amount] += ways[amount - denom];
      }
    }
  }
  return ways[n];
}

const n = 6;
const denoms = [1, 5];

console.log(numberOfWaysToMakeChange(n, denoms));
