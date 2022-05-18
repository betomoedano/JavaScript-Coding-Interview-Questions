/////////////////////////////////////////////////////////////////////////////////////
//Battleships

function findBattleships(matrix) {
  const result = [0, 0, 0];
  const newMatrix = changeMatrix(matrix);
  for (let row = 0; row < newMatrix.length; row++) {
    for (let col = 0; col < newMatrix[row].length; col++) {
      if (newMatrix[row][col] !== "#") continue;
      const currentBattleship = getBattleShip(newMatrix, row, col);
      if (currentBattleship === 1) result[0]++;
      if (currentBattleship === 2) result[1]++;
      if (currentBattleship === 3) result[2]++;
    }
  }
  return result;
}

function getBattleShip(matrix, startRow, startCol) {
  const stack = [[startRow, startCol]];
  let typeOfShip = 0;

  while (stack.length > 0) {
    typeOfShip++;
    const currentPosition = stack.pop();
    const [currentRow, currentCol] = currentPosition;

    matrix[currentRow][currentCol] = ".";

    const neighbors = getNeighbors(matrix, currentRow, currentCol);

    for (const neighbor of neighbors) {
      const [row, col] = neighbor;

      if (matrix[row][col] !== "#") continue;
      stack.push(neighbor);
    }
  }
  return typeOfShip;
}

function getNeighbors(matrix, row, col) {
  const neighbors = [];

  const numRows = matrix.length;
  const numCols = matrix[row].length;

  if (row - 1 >= 0) neighbors.push([row - 1, col]); //UP
  if (row + 1 < numRows) neighbors.push([row + 1, col]); //DOWN
  if (col - 1 >= 0) neighbors.push([row, col - 1]); //LEFT
  if (col + 1 < numCols) neighbors.push([row, col + 1]); //RIGHT

  return neighbors;
}

function changeMatrix(matrix) {
  const newMatrix = [];

  for (let row of matrix) {
    newMatrix.push(row.split(""));
  }
  return newMatrix;
}

// const matrix = [".##.#", "#.#..", "#...#", "#.##."];
// const matrix = [".#..#", "##..#", "...#."];
// const matrix = ["##.", "#.#", ".##"];
const matrix = ["...", "...", "..."];

console.log(findBattleships(matrix));

