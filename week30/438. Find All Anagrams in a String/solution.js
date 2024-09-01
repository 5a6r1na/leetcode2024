/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let sLen = s.length;
  let pLen = p.length;
  let obj = {};
  let track = {};
  let left = 0;
  let right = 0;
  let result = [];
  // [STEP]: Letter Hash.
  for (let i = 0; i < pLen; i++) {
    obj[p[i]] = obj[p[i]] ? obj[p[i]] + 1 : 1;
  }

  // [STEP]: Initiate sliding window.
  while (right < sLen) {
    // [CASE]: If s[i] exists in Letter Hash.
    if (obj[s[right]]) {
      // [STEP]: Hash currrent window letter count in Tracker.
      track[s[right]] = track[s[right]] ? track[s[right]] + 1 : 1;
      // [STEP]: Track current window size.
      windowSize = right - left + 1;
      // [CASE]: If left or right pointer, points to a letter count larger than Letter Hash.
      if (track[s[right]] > obj[s[right]] || track[s[left]] > obj[s[left]]) {
        // [STEP]: Remove left pointer letter count from Tracker.
        track[s[left]] = track[s[left]] - 1;
        // [STEP]: Adjust window by moving left pointer forward.
        left++;

        // [CASE]: If left or right pointer, does NOT point to a letter count larger than Letter Hash
        // and windowSize fits target p length. Target is found.
      } else if (windowSize == pLen) {
        // [STEP]: Push left pointer posistion to result.
        result.push(left);
        // [STEP]: Remove left pointer letter count from Tracker.
        track[s[left]] = track[s[left]] - 1;
        // [STEP]: Adjust window by moving left pointer forward.
        left++;
      }
      // [STEP]: Adjust window by moving right pointer forward.
      right++;

      // [CASE]: If s[i] does NOT exists in Letter Hash.
    } else {
      // [STEP]: Adjust left pointer to next possible letter.
      left = right + 1;
      // [STEP]: Adjust right pointer to next possible letter.
      right = left;
      // [STEP]: reset Tracker
      track = {};
    }
  }
  return result;
};
