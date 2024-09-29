/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  let orgColor = image[sr][sc];

  // [CASE]: If newColor == original color, NOTHING to change, return image.
  if (orgColor == color) return image;

  // [STEP]: Start filling pixels with dfs helper function.
  dfsFillColor(image, sr, sc, orgColor, color);
  return image;

  function dfsFillColor(image, sr, sc, orgColor, color) {
    // [CASE]: Check if out of bounds.
    if (sr < 0 || sc < 0 || sr >= image.length || sc >= image[0].length) return;

    // [CASE]: Check if current cell is NOT the original color.
    if (image[sr][sc] !== orgColor) return;

    // [STEP]: Change the color of the current pixel.
    image[sr][sc] = color;

    // [STEP]: Recursively fill neighboring pixels
    // [CASE]: Top.
    dfsFillColor(image, sr - 1, sc, orgColor, color);
    // [CASE]: Bottom.
    dfsFillColor(image, sr + 1, sc, orgColor, color);
    // [CASE]: Left.
    dfsFillColor(image, sr, sc - 1, orgColor, color);
    // [CASE]: Right.
    dfsFillColor(image, sr, sc + 1, orgColor, color);
  }
};
