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
      // [CASE]: If current number greater than left pointer, check left portion.
    } else if (nums[left] <= nums[mid]) {
      // [CASE]: If current number is smaller than target, move left pointer up.
      // [CASE]: If smallest left portion number is still greater than target, move left pointer up.(check right portion)
      if (nums[mid] < target || nums[left] > target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
      // [CASE]: Check right portion.
    } else {
      // [CASE]: If current number is greater than target, move right pointer down.
      // [CASE]: If largest right portion number is still smaller than target, move right pointer down(check left portion).
      if (nums[mid] > target || nums[right] < target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }
  // [CASE]: If no matches, return -1.
  return -1;
};
