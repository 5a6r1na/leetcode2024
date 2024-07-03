/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
  // current largest sum
  let maxSum = 0;
  // current sliding window start
  let start = 0;
  // current sliding window sum
  let sum = 0;
  // keep track of unique elements
  let uniques = new Set();

  // current sliding window end
  for (let end = 0; end < nums.length; end++) {
    // if current num in unique, remove element and move window forward
    while (uniques.has(nums[end])) {
      sum -= nums[start];
      uniques.delete(nums[start]);
      start++;
    }
    // if current num not in unique, add element and add sum
    sum += nums[end];
    uniques.add(nums[end]);

    // check window size
    if (end - start + 1 > k) {
      sum -= nums[start];
      uniques.delete(nums[start]);
      start++;
    }

    // check if window size is k and all element are unique
    if (end - start + 1 === k && uniques.size === k) {
      maxSum = Math.max(maxSum, sum);
    }
  }

  return maxSum;
};
