// Time O(n) | Space O(n)
function caesarCipherEncryptor(string, key) {
  const result = [];
  const aphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  for (const idx in string) {
    const newLetter = getNewLetter(string[idx], aphabet, key);
    result.push(aphabet[newLetter]);
  }
  return result.join("");
}

function getNewLetter(char, aphabet, key) {
  const letter = (aphabet.indexOf(char) + key) % 26;
  return letter;
}

const string = "xyz";
const key = 2;

console.log(caesarCipherEncryptor(string, key));
