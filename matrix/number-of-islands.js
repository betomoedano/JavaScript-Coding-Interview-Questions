// time O(wh) where w is the width of the grid and h the height
// space O(n) where n is the number of items in our stack search
function numIslands(grid) {
  let numIslands = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === "1") {
        search(grid, row, col);
        numIslands++;
      }
    }
  }
  return numIslands;
}

function search(grid, row, col) {
  const stack = [[row, col]];

  while (stack.length > 0) {
    const currentPosition = stack.pop();
    const [currentRow, currentCol] = currentPosition;
    grid[currentRow][currentCol] = "0";
    const neighbors = getNeighbors(grid, currentRow, currentCol);
    for (const neighbor of neighbors) {
      stack.push(neighbor);
    }
  }
}

function getNeighbors(grid, row, col) {
  const neighbors = [];
  if (row - 1 >= 0 && grid[row - 1][col] !== "0")
    neighbors.push([row - 1, col]);
  if (row + 1 < grid.length && grid[row + 1][col] !== "0")
    neighbors.push([row + 1, col]);
  if (col - 1 >= 0 && grid[row][col - 1] !== "0")
    neighbors.push([row, col - 1]);
  if (col + 1 < grid[0].length && grid[row][col + 1] !== "0")
    neighbors.push([row, col + 1]);
  return neighbors;
}

// const grid = [
//   ["1", "1", "1", "1", "0"],
//   ["1", "1", "0", "1", "0"],
//   ["1", "1", "0", "0", "0"],
//   ["0", "0", "0", "0", "0"],
// ];

const grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];
// Output: 3

console.log(numIslands(grid));
