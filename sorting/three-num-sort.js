// THREE NUMBER SORT
// TIME O(n)
// SPACE O(1) where n is the lenght of the array
////////////////////////////////////////////////////////
// function threeNumberSort(array, order) {
//   let firstIdx = 0;
//   for (let num = 0; num < array.length; num++) {
//     if (array[num] === order[0]) {
//       swap(firstIdx, num, array);
//       firstIdx++;
//     }
//   }

//   let lastIdx = array.length - 1;
//   for (let j = array.length - 1; j >= 0; j--) {
//     if (array[j] === order[2]) {
//       swap(lastIdx, j, array);
//       lastIdx--;
//     }
//   }

//   return array;
// }

// function swap(first, second, array) {
//   const temp = array[first];
//   array[first] = array[second];
//   array[second] = temp;
// }
// const array = [1, 0, 0, -1, -1, 0, 1, 1];
// const order = [0, 1, -1];
// console.log(threeNumberSort(array, order));

////////////////////////////////////////////////////////////////
//SOLUTION 2
/// TIME O(n)
// SPACE O(1) where n is the lenght of the array

function threeNumberSort(array, order) {
    const firstValue = order[0];
    const secondValue = order[1];
  
    let firstIdx = 0;
    let secondIdx = 0;
    let thirdIdx = array.length - 1;
  
    while (secondIdx <= thirdIdx) {
      const value = array[secondIdx];
  
      if (value === firstValue) {
        swap(firstIdx, secondIdx, array);
        firstIdx++;
        secondIdx++;
      } else if (value === secondValue) {
        secondIdx++;
      } else {
        swap(secondIdx, thirdIdx, array);
        thirdIdx -= 1;
      }
    }
  
    return array;
  }
  
  function swap(first, second, array) {
    const temp = array[first];
    array[first] = array[second];
    array[second] = temp;
  }
  const array = [1, 0, 0, -1, -1, 0, 1, 1];
  const order = [0, 1, -1];
  console.log(threeNumberSort(array, order));