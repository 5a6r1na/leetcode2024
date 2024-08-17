/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let length = nums.length;
  let result = false;
  let obj = {};

  for (let i = 0; i < length; i++) {
    // [CASE]: if nums[i] exists in obj add 1 to count
    // [CASE]: if nums[i] NOT exists in obj set count to 1
    obj[nums[i]] = obj[nums[i]] ? obj[nums[i]] + 1 : 1;
    // [CASE]: if obj count exceeds 2 set result to true
    if (obj[nums[i]] >= 2) {
      result = true;
      // [OPT]: add break to stop loop
      break;
    }
  }
  return result;
};
