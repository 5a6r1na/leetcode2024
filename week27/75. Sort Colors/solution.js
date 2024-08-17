/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let length = nums.length;
  let red = 0;
  let white = 0;
  let blue = 0;

  // [STEP]: count each color
  for (let i = 0; i < length; i++) {
    if (nums[i] == 0) {
      red++;
    } else if (nums[i] == 1) {
      white++;
    } else {
      blue++;
    }
  }

  // [STEP]: modify num by color
  for (let j = 0; j < length; j++) {
    if (j < red) {
      nums[j] = 0;
    } else if (j < red + white) {
      nums[j] = 1;
    } else {
      nums[j] = 2;
    }
  }
  return nums;
};
