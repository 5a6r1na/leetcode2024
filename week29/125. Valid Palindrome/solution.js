/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let leftPointer = 0;
  let rightPointer = height.length - 1;
  let result = 0;

  while (leftPointer < rightPointer) {
    // [STEP]: Calculate current pointer area
    let area =
      (rightPointer - leftPointer) *
      Math.min(height[leftPointer], height[rightPointer]);
    // [STEP]: Compare and replace for max area
    result = Math.max(result, area);
    // [CASE]: Move smaller pointer to increase chance of larger result
    if (height[leftPointer] < height[rightPointer]) {
      leftPointer++;
    } else {
      rightPointer--;
    }
  }
  return result;
};
