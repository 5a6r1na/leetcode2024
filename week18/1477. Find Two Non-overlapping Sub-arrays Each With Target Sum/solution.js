/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */

var minSumOfLengths = function (arr, target) {
  // left and right(currSum) pointers to define the current window and element sum
  let left = 0,
    currSum = 0;
  let result = Infinity;
  // minimum length of single subarray
  let minDist = Infinity;
  let length = arr.length;
  let tracker = [];

  for (let i = 0; i < length; i++) {
    // currSum is incremented by next element(arr[i])
    currSum += arr[i];

    //while the currSum is still greater than target, leftpointer moves one index further, keeping minimum window size
    while (currSum > target) {
      currSum -= arr[left++];
    }
    // If the sum of the elements in the current window equals target:
    if (currSum == target) {
      // length of current subarrays(window size)
      let currDist = i - left + 1;
      // length of all valid subarrays
      let currSumDist = tracker[left - 1] + currDist;

      // Track minimum length of single subarray
      minDist = Math.min(minDist, currDist);

      if (left > 0 && tracker[left - 1]) {
        // Track minimum length of total valid subarrays
        result = Math.min(result, currSumDist);
      }
    }
    // Update tracker[i] with the minimum length of subarray
    tracker[i] = minDist;
  }
  //Returns -1 if result is still Infinity (indicating only one or no valid subarrays were found)
  return result === Infinity ? -1 : result;
};
