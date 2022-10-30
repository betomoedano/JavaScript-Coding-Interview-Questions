// time O(n) where n is the number of elements in the array
//space O(d) where d is the greatest depth of "special" arrays
function productSum(array, depth = 1) {
  let sum = 0;

  for (const element of array) {
    if (Array.isArray(element)) {
      const result = productSum(element, depth + 1);
      sum += result;
    } else {
      sum += element;
    }
  }
  return sum * depth;
}

const array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];
console.log(productSum(array));
