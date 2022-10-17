// time O(w * n * log(n))
// space O(wn) - where w is the number of words and n is the length of the longest word

function groupAnagrams(words) {
  const anagrams = {};
  for (const word of words) {
    const sortedWord = word.split("").sort().join("");
    if (sortedWord in anagrams) {
      anagrams[sortedWord].push(word);
    } else {
      anagrams[sortedWord] = [word];
    }
  }
  return Object.values(anagrams);
}

const words = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"];

console.log(groupAnagrams(words));
