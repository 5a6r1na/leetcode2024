/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let length = s.length;
  let left = 0;
  let right = 0;
  let obj = {};
  let max = 0;

  while (right < length) {
    // [CASE]: If s[i] exists in obj, left pointer ++ and reset right pointer
    if (obj[s[right]]) {
      // [STEP]: Move left pointer forward
      left++;
      // [STEP]: Reset window size
      right = left;
      // [STEP]: Clear hash table
      obj = {};
    } else {
      // [CASE]: If s[i] does NOT exists in obj
      // [STEP]: Hash letter
      obj[s[right]] = 1;
      // [STEP]: Calculate current max length
      max = Math.max(right - left + 1, max);
      // [STEP]: Expand window right pointer ++
      right++;
    }
  }

  return max;
};
