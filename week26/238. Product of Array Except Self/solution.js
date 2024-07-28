/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let result = [];
  let prefix = [];
  let suffix = [];
  let length = nums.length;

  // [STEP]: helper variables
  prefix[0] = 1;
  suffix[length - 1] = 1;

  // [STEP]: calculate prefix
  for (let i = 1; i < length; i++) {
    prefix[i] = nums[i - 1] * prefix[i - 1];
  }

  // [STEP]: calculate suffix
  for (let i = length - 2; i >= 0; i--) {
    suffix[i] = nums[i + 1] * suffix[i + 1];
  }

  // [STEP]: calculate result
  for (let i = 0; i < length; i++) {
    result.push(prefix[i] * suffix[i]);
  }
  return result;
};
