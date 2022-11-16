// Time O(n)
// Space O(n)
function firstNonRepeatingLetter(s) {
  const frequencies = {};
  let result = "";

  for (const char of s) {
    if (char.toLowerCase() in frequencies) {
      frequencies[char.toLowerCase()].push(char);
    } else {
      frequencies[char.toLowerCase()] = [char];
    }
  }

  for (const key in frequencies) {
    if (frequencies[key].length === 1) return frequencies[key].shift();
  }

  return result;
}
const string = "stress";
// const upper = "sTreSS";
console.log(firstNonRepeatingLetter(string));
// console.log(firstNonRepeatingLetter(upper));
