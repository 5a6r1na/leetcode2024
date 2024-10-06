/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  // [CASE]: If grid is empty, return 0;
  if (!grid || !grid.length || !grid[0].length) return 0;

  let island = 0;
  let row = grid.length;
  let col = grid[0].length;

  // [STEP]: Explore each cell in grid to find island.
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      // [CASE]: If cell == "1", island is found.
      if (grid[i][j] === "1") {
        // [STEP]: Add count of island.
        island++;
        // [STEP]: Find all adjacent lands.
        dfsFindLands(grid, i, j);
      }
    }
  }
  // [STEP]: Return final island count.
  return island;

  // [STEP]: Define dfs function to explore adjacent lands.
  function dfsFindLands(grid, row, col) {
    // [CASE]: Check if out of bounds.
    if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length)
      return;

    // [CASE]: Check if cell is water, return.
    if (grid[row][col] === "0") return;

    // [STEP]: Mark explored island as 0 to prevent revisiting and recounting.
    grid[row][col] = "0";

    // [STEP]: Recursively explore neighboring cells.
    // [CASE]: Top.
    dfsFindLands(grid, row - 1, col);
    // [CASE]: Bottom.
    dfsFindLands(grid, row + 1, col);
    // [CASE]: Left.
    dfsFindLands(grid, row, col - 1);
    // [CASE]: Right.
    dfsFindLands(grid, row, col + 1);
  }
};
