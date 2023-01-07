//
// This solution has a time complexity of O(n) because it only needs to go through the gas stations once.
// Let's go through this code step by step:
// We initialize three variables: start to keep track of the starting gas st
// ation, total to track the net change in gas as we go around the circuit, and tank to keep track of the gas in our tank as we go around the circuit.
// We loop through each gas station and add the difference between the gas at the current station and the cost to reach the next station to tank.
// If tank is less than 0, we know that it is not possible to reach the next station with the current amount of gas. In this case, we set start to the next gas station, add tank to total, and reset tank to 0.
// After going through all of the gas stations, we check if total plus tank is less than 0. If it is, we return -1 because it was not possible to complete the circuit. Otherwise, we return start because we were able to complete the circuit starting at the gas station at index start.
//

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
function canCompleteCircuit(gas, cost) {
  let start = 0;
  let total = 0;
  let tank = 0;
  for (let i = 0; i < gas.length; i++) {
    tank += gas[i] - cost[i];
    if (tank < 0) {
      start = i + 1;
      total += tank;
      tank = 0;
    }
  }
  return total + tank < 0 ? -1 : start;
}
