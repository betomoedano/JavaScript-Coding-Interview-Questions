/**
 * @param {number[]} fruits
 * @return {number}
 * Optimal Solution
 * Time O(n)
 * Space O(1)
 */
var totalFruit = function (fruits) {
  let maxPicked = 0;
  let left = 0;
  const basket = {}; //We use a hash map 'basket' to store the number of each type of fruit.

  for (let right = 0; right < fruits.length; right++) {
    // Add fruit from the right index (right) of the window.
    basket.hasOwnProperty(fruits[right])
      ? basket[fruits[right]]++
      : (basket[fruits[right]] = 1); // if we have this fruit in the basket we increase
    // the count + 1 otherwise we add the fruit to
    // the basket and initialize its count to 1.
    while (Object.entries(basket).length > 2) {
      // This line return an array of [key, value] of elements in the basket
      //  If we have more than 2 values, we need to remove one fruit from the left until we only have 2 fruits
      basket[fruits[left]]--;
      if (basket[fruits[left]] === 0) {
        delete basket[fruits[left]]; // if we have 0 fruits we delete that fruit from the basket. so next time we get the length we dont count that fruit.
      }
      left++; // after deliting the fruit we increase the left window
    }
    maxPicked = Math.max(maxPicked, right - left + 1); // update maxPicked
  }
  return maxPicked;
};
