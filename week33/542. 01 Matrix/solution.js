/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  let height = mat.length;
  let width = mat[0].length;
  let queue = [];

  // [STEP]: Initialize queue, orginal matrix will be all 0 cells and Infinity.
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      // [CASE]: If mat[i][j] == 0, push indexs to queue.
      if (mat[i][j] == 0) {
        queue.push([i, j]);
      } else {
        // [CASE]: If mat[i][j] !== 0, set cell to Infinity.
        mat[i][j] = Infinity;
      }
    }
  }

  // [STEP]: Set possible directions for moving up, down, left, right.
  let directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  // [STEP]: Perform BFS to find the shortest distance.
  while (queue.length > 0) {
    // [STEP]: Get current cell from queue.
    let [row, col] = queue.shift();

    // [STEP]: Move pointer around all four possible directions.
    for (let [dx, dy] of directions) {
      let newRow = row + dx;
      let newCol = col + dy;

      // [CASE]: Check if the new position is within bounds.
      if (newRow >= 0 && newRow < height && newCol >= 0 && newCol < width) {
        // [CASE]: Check if shorter path is found.
        if (mat[newRow][newCol] > mat[row][col] + 1) {
          // [STEP]: Update distance
          mat[newRow][newCol] = mat[row][col] + 1;
          // [STEP]: Add new cell to queue for further distance check(BFS processing).
          queue.push([newRow, newCol]);
        }
      }
    }
  }
  return mat;
};
