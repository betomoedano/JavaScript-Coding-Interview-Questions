function chess(size) {
  const board = new Array(size).fill(0).map((_) => new Array(size));

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board.length; col++) {
      if ((row + col) % 2 === 0) {
        board[row][col] = "♖";
      } else {
        board[row][col] = "♜";
      }
    }
  }
  console.log(board);
}

console.log(chess(2));
console.log(chess(3));
console.log(chess(4));
console.log(chess(5));
console.log(chess(6));
