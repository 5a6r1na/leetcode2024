/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  // [STEP]: Initialize a queue to track rotten orange coordinates.
  let queue = [];
  // [STEP]: Track minutes.
  let minute = 0;
  // [STEP]: Track fresh oranges.
  let fresh = 0;

  // [STEP]: Track grid setups.
  let height = grid.length;
  let width = grid[0].length;

  // [STEP]: Explore each cell in grid to find fresh oranges.
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      // [CASE]: If cell == 1, fresh orange is found.
      if (grid[i][j] == 1) {
        // [STEP]: Add count of fresh orange.
        fresh++;
        // [CASE]: If cell == 2, rotten orange is found.
      } else if (grid[i][j] == 2) {
        // [STEP]: Add rotten orange coordinates to queue.
        queue.push([i, j]);
      }
    }
  }

  // [STEP]: Continue search if queue is NOT empty and fresh oranges exist.
  while (queue.length > 0 && fresh > 0) {
    for (let i = 0; i < queue.length; i++) {
      // [STEP]: Get rotten orange coordinates from queue.
      let [row, col] = queue.shift();

      // [STEP]: Set possible directions for moving up, down, left, right.
      let directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
      ];

      // [STEP]: Move pointer around all four possible directions.
      for (let [dx, dy] of directions) {
        let newRow = row + dx;
        let newCol = col + dy;

        // [CASE]: Check if the new position is within bounds.
        if (newRow >= 0 && newRow < width && newCol >= 0 && newCol < height) {
          // [CASE: Check if current cell is a fresh orange.
          if (grid[newRow][newCol] == 1) {
            // [STEP]: Turn fresh orange to rotten orange.
            grid[newRow][newCol] = 2;

            // [STEP]: Add newly rotten orange coordinates to the queue.
            queue.push([newRow, newCol]);

            // [STEP]: Add new cell to queue for further distance check(BFS processing).
            fresh--;
          }
        }
      }
    }
    // [STEP]: Finish round, increment minute count.
    minute++;
  }
  // [CASE]: If no remaing fresh oranges, return minute count, else return -1.
  return fresh == 0 ? minute : -1;
};
