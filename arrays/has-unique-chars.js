//string has unique characters

function hasUniqueCharacters(string) {
    if (string.length > 128) return false;
  
    const charSet = new Set();
  
    for (let idx in string) {
      if (charSet.has(string[idx])) return false;
      charSet.add(string[idx]);
    }
    return true;
  }
  
  console.log(hasUniqueCharacters("abcdefghijklmnopqrstuvwxyz"));
  
  function hasUniqueCharactersSet(str) {
    let chars = new Set();
  
    for (let i = 0; i < str.length; ++i) {
      if (chars.has(str[i])) {
        return false;
      }
      chars.add(str[i]);
    }
    return true;
  }
  
  /**
   * Sort the original string first then iterate through it. Repeat characters
   * will show up next to eachother so fail if any two characters in a row
   * are the same.
   *
   * Time: O(N lg N)
   * Additional space: O(1)
   */
  function hasUniqueCharactersSort(str) {
    // sort string using quicksort
    str.sort();
  
    for (let i = 1; i < str.length; ++i) {
      if (str[i] === str[i - 1]) {
        return false;
      }
    }
    return true;
  }
  