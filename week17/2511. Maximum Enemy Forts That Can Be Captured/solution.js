/**
 * @param {number[]} forts
 * @return {number}
 */

var captureForts = function (forts) {
  let left = 0,
    max = 0;
  for (let i = 0; i < forts.length; i++) {
    // right pointer is not 0
    if (forts[i]) {
      // left pointer is not 0 and left/right pointer are not the same
      if (forts[left] && forts[left] !== forts[i]) {
        // cal the distance between
        max = Math.max(max, i - left - 1);
      }
      // update left pointer to current right pointer position
      left = i;
    }
  }
  return max;
};
