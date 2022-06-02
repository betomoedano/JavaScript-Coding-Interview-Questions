// Time O(n*2^n)
// Space O(n*2^n)

// function poweset(array) {
//   const subsets = [[]];

//   for (let num of array) {
//     const length = subsets.length;
//     for (let i = 0; i < length; i++) {
//       const currentSubset = subsets[i];
//       subsets.push(currentSubset.concat(num));
//     }
//   }
//   return subsets;
// }


// recursive solution
// runs in the same time/space complexity

function powerset(array, idx = null) {
    if (idx === null) {
      idx = array.length - 1;
    }
    if (idx < 0) {
      return [[]];
    }
    const ele = array[idx];
    const subsets = powerset(array, idx - 1);
    const length = subsets.length;
    for (let i = 0; i < length; i++) {
      const currentSubset = subsets[i];
      subsets.push(currentSubset.concat(ele));
    }
    return subsets;
  }
  
  const array = [];
  
  console.log(powerset(array));
  