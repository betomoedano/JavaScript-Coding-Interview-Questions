// Time O(n*m) - where n is the number of words and m the length of the longest word
// Space O(n*m)
function semordnilap(words) {
  if (words.length === 0) return [];
  const wordsSet = new Set(words);
  const semordnilapPairs = [];

  for (const word of words) {
    const reverse = word.split("").reverse().join("");
    if (wordsSet.has(reverse) && reverse !== word) {
      semordnilapPairs.push([word, reverse]);
      wordsSet.delete(word);
      wordsSet.delete(reverse);
    }
  }

  return semordnilapPairs;
}
