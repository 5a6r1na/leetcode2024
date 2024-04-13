/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverageDifference = function (nums) {
  let leftSum = 0,
    totalSum = 0,
    index = 0;
  let minDiff = Infinity;
  let length = nums.length;

  // cal total sum
  for (let i = 0; i < length; i++) {
    totalSum += nums[i];
  }

  for (let i = 0; i < length; i++) {
    // cal left sum and avg
    leftSum += nums[i];
    let leftCount = i + 1;
    let leftAvg = Math.floor(leftSum / leftCount);

    // cal right sum and avg
    let rightSum = totalSum - leftSum;
    let rightCount = length - leftCount;
    // handle last round when divisor is zero
    let rightAvg = Math.floor(rightSum / (i == length - 1 ? 1 : rightCount));

    // cal absolute difference
    let currDiff = Math.abs(leftAvg - rightAvg);

    // if current diff < min diff, replace diff and index
    if (currDiff < minDiff) {
      minDiff = currDiff;
      index = i;
    }
  }
  return index;
};
