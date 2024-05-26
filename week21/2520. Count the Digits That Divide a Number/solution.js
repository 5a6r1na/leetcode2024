/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function (nums, target, start) {
  let array = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      let res = Math.abs(i - start);
      array.push(res);
    }
  }
  // spread operator
  return Math.min(...array);
};
