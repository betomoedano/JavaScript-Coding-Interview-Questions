// Time O(n) | Space O(1) the constant space is because the
// string only has lowercase English-alphabet letters; which meas
// that our hash table will never have more that 26 chars frequencies.

function firstNonRepeatingCharacter(string) {
  const frequencies = {};
  for (const char of string) {
    if (frequencies[char]) {
      frequencies[char] += 1;
      continue;
    }
    frequencies[char] = 1;
  }

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (frequencies[char] === 1) return i;
  }

  return -1;
}
