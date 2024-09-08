/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let left = 0;
  let right = matrix[0].length;
  let top = 0;
  let bottom = matrix.length;
  let result = [];

  while (left < right && top < bottom) {
    // [STEP]: Collect all elements in the top row.
    for (let i = left; i < right; i++) {
      result.push(matrix[top][i]);
    }
    // [STEP]: Shift top pointer down.
    top++;

    // [STEP]: Collect all elements in the right column.
    for (let i = top; i < bottom; i++) {
      result.push(matrix[i][right - 1]);
    }
    // [STEP]: Shift right pointer left.
    right--;

    // [CASE]: If NO rows or cols left, break loop.
    if (!(left < right && top < bottom)) {
      break;
    }

    // [STEP]: Collect all elements in the bottom row.
    for (let i = right - 1; i >= left; i--) {
      result.push(matrix[bottom - 1][i]);
    }
    // [STEP]: Shift bottom pointer up.
    bottom--;

    // [STEP]: Collect all elements in the left column.
    for (let i = bottom - 1; i >= top; i--) {
      result.push(matrix[i][left]);
    }
    // [STEP]: Shift left pointer right.
    left++;
  }

  return result;
};
