/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let length = nums.length;
  let left = 0;
  let right = length - 1;

  /** while (left < right) miss checking the case where left == right. e.g. array with one element. */
  while (left <= right) {
    // [STEP]: Calculate mid point.
    let mid = Math.floor((right + left) / 2);

    // [CASE]: If current number equals target, return index.
    if (nums[mid] == target) {
      return mid;
      // [CASE]: If current number is smaller than target, move left pointer up.
    } else if (nums[mid] < target) {
      left = mid + 1;
      // [CASE]: If current number is larger than target, move right pointer down.
    } else if (nums[mid] > target) {
      right = mid - 1;
    }
  }
  // [CASE]: If no matches, return -1.
  return -1;
};
