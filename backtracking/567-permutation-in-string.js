/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false;
  const targetMap = new Map();

  for (const letter of s1) {
    const exist = targetMap.get(letter);
    if (exist) {
      targetMap.set(letter, exist + 1);
    } else {
      targetMap.set(letter, 1);
    }
  }

  for (let windowHead = 0; windowHead <= s2.length - s1.length; windowHead++) {
    const trackMap = new Map();
    for (let testHead = 0; testHead < s1.length; testHead++) {
      const letterTest = s2[windowHead + testHead];
      const exist = targetMap.get(letterTest);
      if (exist) {
        trackMap.set(
          letterTest,
          trackMap.get(letterTest) ? trackMap.get(letterTest) + 1 : 1
        );

        if (trackMap.get(letterTest) > exist) {
          break;
        }

        if (testHead + 1 === s1.length) {
          return true;
        }
      } else {
        break;
      }
    }
  }
  return false;
};

//
//  Solution 2
//  This solution would not work on leetcode because the time complexity
//  even tho this solution works for simple tests.
//
// var checkInclusion = function(s1, s2) {
//   if (s2.includes(s1)) return true;
//   const freq = buildFreqTable(s1);
//   const result = [];
//   getPermsHelper(freq, "", s1.length, result, s2);
//   return result.length > 0;
// };

// //
// // Time O(n!)
// // Space O(n!)
// //

// function getPermsHelper(freq, prefix, remaining, result, s2) {
//   if (result.length > 0) return;
//   // Base case, permutation has been complited
//   if (remaining === 0) {
//     if (s2.includes(prefix)) {
//       result.push(prefix);
//     }
//     return;
//   }

//   // Try remaining letters for next char, and generate remaining permutations
//   for (const [char, count] of Object.entries(freq)) {
//     if (count > 0) {
//       freq[char] -= 1;
//       getPermsHelper(freq, prefix + char, remaining - 1, result, s2);
//       freq[char] = count;
//     }
//   }
// }

// function buildFreqTable(string) {
//   const hashTable = {};

//   for (const char of string) {
//     if (hashTable.hasOwnProperty(char)) {
//       hashTable[char] += 1;
//     } else {
//       hashTable[char] = 1;
//     }
//   }
//   return hashTable;
// }
