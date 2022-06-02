//////////////////////////////////////////////////////////////////////////////////////
//removeDuplicates from sorted array

// const removeDuplicates = function (nums) {
//   let pointer = 1;

//   for (let i = 0; i < nums.length - 1; i++) {
//     const firstNum = nums[i];
//     const secondNum = nums[i + 1];
//     if (firstNum === secondNum) continue;
//     if (firstNum !== secondNum) {
//       nums[pointer] = secondNum;
//       pointer++;
//     }
//   }
//   return nums;
// };

const removeDuplicates = (nums) => {
  return Array.from(new Set(nums));
};
// input: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4] 
// output: [0, 1, 2, 3, 4]

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log(removeDuplicates(nums));

