// Time O(n)
// Space O(n)
function encoding(string) {
  if (!string) return string;
  let result = "";

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    const start = i;

    while (i + 1 < string.length && char === string[i + 1]) {
      i++;
    }
    result += i - start + 1 + char;
  }
  return result.length > string.length ? string : result;
}

const string = "aaabbccdddddddddddddddddddddddddASLDKFJasdadskf";
console.log(encoding(string));
