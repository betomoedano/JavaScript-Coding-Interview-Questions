// time O(n) where n is the length of the input array
// space O(n)

function arrayOfProducts(array) {
  const result = new Array(array.length).fill(1);

  let product = 1;
  // get Left Products
  for (let i = 1; i <= array.length; i++) {
    result[i - 1] = product;
    product *= array[i - 1];
  }

  let rightProduct = 1;
  // get right Products
  for (let i = array.length - 2; i >= -1; i--) {
    result[i + 1] *= rightProduct;
    rightProduct *= array[i + 1];
  }
  return result;
}
