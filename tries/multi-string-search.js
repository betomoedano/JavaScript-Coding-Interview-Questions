////////////////////////////////////////////
// MY SOLUTION
////////////////////////////////////////////
class PrefixTrie {
  constructor(string) {
    this.root = {};
    this.lastSymbol = "*";
    this.populateSuffixTrieFrom(string);
  }

  // Time O(n^2)
  // Space O(n^2)
  populateSuffixTrieFrom(string) {
    for (let i = 0; i < string.length; i++) {
      this.insertStringFrom(i, string);
    }
  }

  insertStringFrom(i, string) {
    let currentNode = this.root;

    for (let j = i; j < string.length; j++) {
      const letter = string[j];
      if (!currentNode.hasOwnProperty(letter)) {
        currentNode[letter] = {};
      }
      currentNode = currentNode[letter];
    }
    currentNode[this.lastSymbol] = true;
  }

  contains(string) {
    let currentNode = this.root;
    for (let i = 0; i < string.length; i++) {
      const letter = string[i];
      if (!currentNode.hasOwnProperty(letter)) {
        return false;
      }
      currentNode = currentNode[letter];
    }
    // return currentNode.hasOwnProperty(this.lastSymbol);
    return true;
  }
}
// Time O(b^2 + ns)
// Space O(b^2 + n)
function multiStringSearch(bigString, smallStrings) {
  const trie = new PrefixTrie(bigString);
  return smallStrings.map((string) => trie.contains(string));
}

////////////////////////////////////////////
// BETTER SOLUTION
////////////////////////////////////////////
class Trie {
  constructor() {
    this.root = {};
    this.endSymbol = "*";
  }

  insert(string) {
    let currentNode = this.root;

    for (let i = 0; i < string.length; i++) {
      const letter = string[i];
      if (!currentNode.hasOwnProperty(letter)) {
        currentNode[letter] = {};
      }
      currentNode = currentNode[letter];
    }
    currentNode[this.endSymbol] = string;
  }
}
// O(ns + bs) time | O(ns) space
function multiStringSearch(bigString, smallStrings) {
  const trie = new Trie();
  for (const string of smallStrings) {
    trie.insert(string);
  }
  const containedStrings = {};
  for (let i = 0; i < bigString.length; i++) {
    findSmallStringsIn(bigString, i, trie, containedStrings);
  }
  return smallStrings.map((string) => string in containedStrings);
}

function findSmallStringsIn(string, startIdx, trie, containedStrings) {
  let currentNode = trie.root;
  for (let i = startIdx; i < string.length; i++) {
    const currentChar = string[i];
    if (!currentNode.hasOwnProperty(currentChar)) break;
    currentNode = currentNode[currentChar];
    if (currentNode.hasOwnProperty(trie.endSymbol))
      containedStrings[currentNode[trie.endSymbol]] = true;
  }
}
