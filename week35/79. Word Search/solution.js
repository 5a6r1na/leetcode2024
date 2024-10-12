/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  // [CASE]: If board is empty, return 0;
  if (!board || !board.length || !board[0].length) return;

  let index = 0;
  let row = board.length;
  let col = board[0].length;

  // [STEP]: Define dfs function to explore adjacent letters.
  function dfsCheckLetters(row, col, index) {
    // [CASE]: If the whole word is found, return true.
    if (index == word.length) return true;

    // [CASE]: Check if out of bounds.
    if (row < 0 || col < 0 || row >= board.length || col >= board[0].length)
      return false;

    // [CASE]: If letter NOT in word.
    if (board[row][col] !== word[index]) return false;

    // [STEP]: Keep record of current cell letter.
    let currLetter = board[row][col];

    // [STEP]: Temporarily mark the cell.
    board[row][col] = "#";

    /**
       [STEP]: Recursively explore neighboring cells and incrementing word index to find next matching letter.
               Returns the result of search.
       */
    result =
      // [CASE]: Top.
      dfsCheckLetters(row - 1, col, index + 1) ||
      // [CASE]: Bottom.
      dfsCheckLetters(row + 1, col, index + 1) ||
      // [CASE]: Left.
      dfsCheckLetters(row, col - 1, index + 1) ||
      // [CASE]: Right.
      dfsCheckLetters(row, col + 1, index + 1);

    // [STEP]: Set letter back to cell.
    board[row][col] = currLetter;
    return result;
  }

  // [STEP]: Explore each cell in board to find matching letter.
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      // [CASE]: If word search is complete, return true;
      if (dfsCheckLetters(i, j, index)) {
        return true;
      }
    }
  }
  // [CASE]: If word search is NOT complete, return false;
  return false;
};
