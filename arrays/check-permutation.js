//  given two strings return if one is a permutation of the other

// dic {
//  'd': 1,
//  'o': 1,
//  'g': 1,
// }

// O(n) time
// O(n) space
function checkPermutation(str1, str2) {
    if (str1.length > str2.length || str2.length > str1.length) return false;
  
    const dic = {};
    for (const char of str1) {
      if (char in dic) {
        dic[char]++;
        continue;
      }
      dic[char] = 1;
    }
  
    for (const char of str2) {
      if (dic[char] === 0) return false;
      if (dic[char] > 0) dic[char]--;
    }
    return true;
  }
  
  const str1 = "dog";
  const str2 = "god";
  // this should return true;
  
  console.log(checkPermutation(str1, str2));
  console.log(checkPermutation("edcba", "abcde "));