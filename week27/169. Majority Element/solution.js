/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let length = nums.length;
  let obj = {};

  for (let i = 0; i < length; i++) {
    // [CASE]: if nums[i] exists in obj add 1 to count
    // [CASE]: if nums[i] NOT exists in obj set count to 1
    obj[nums[i]] = obj[nums[i]] ? obj[nums[i]] + 1 : 1;
    console.log(obj);
    // [CASE]: if obj count exceeds length/2 retrun nums[i]
    if (obj[nums[i]] > length / 2) {
      return nums[i];
    }
  }
};
