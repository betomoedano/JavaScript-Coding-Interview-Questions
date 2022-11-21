// Time O (ws + nm*8^s) | Space O(nm + ws)
class Trie {
  constructor() {
    this.root = {};
    this.endSymbol = "*";
  }
  add(string) {
    let currentNode = this.root;
    for (const char of string) {
      if (!currentNode.hasOwnProperty(char)) currentNode[char] = {};
      currentNode = currentNode[char];
    }
    currentNode[this.endSymbol] = string;
  }
}

function boggleBoard(board, words) {
  const finalWords = {};
  const visited = board.map((row) => row.map((letter) => false));
  const trie = new Trie();
  for (const word of words) {
    trie.add(word);
  }

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      explore(row, col, board, visited, trie.root, finalWords);
    }
  }
  return Object.keys(finalWords);
}

function explore(row, col, board, visited, trieNode, finalWords) {
  if (visited[row][col]) return;
  const letter = board[row][col];
  if (!trieNode.hasOwnProperty(letter)) return;
  visited[row][col] = true;
  trieNode = trieNode[letter];
  if ("*" in trieNode) finalWords[trieNode["*"]] = true;
  const neighbors = getNeighbors(row, col, board);

  for (const neighbor of neighbors) {
    explore(neighbor[0], neighbor[1], board, visited, trieNode, finalWords);
  }
  visited[row][col] = false;
}

function getNeighbors(row, col, board) {
  const neighbors = [];
  if (row > 0) neighbors.push([row - 1, col]);
  if (col > 0) neighbors.push([row, col - 1]);
  if (row + 1 < board.length) neighbors.push([row + 1, col]);
  if (col + 1 < board[0].length) neighbors.push([row, col + 1]);
  if (row > 0 && col > 0) neighbors.push([row - 1, col - 1]);
  if (row + 1 < board.length && col > 0) neighbors.push([row + 1, col - 1]);
  if (row + 1 < board.length && col + 1 < board[0].length)
    neighbors.push([row + 1, col + 1]);
  if (row > 0 && col + 1 < board[0].length) neighbors.push([row - 1, col + 1]);
  return neighbors;
}
