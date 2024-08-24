/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let length = s.length;
  let obj = {};
  let result = 0;
  let flag = false;

  // [CASE]: If length == 1, longest palindrome is 1.
  if (length == 1) return 1;

  // [STEP]: Hash letter counts
  for (let i = 0; i < length; i++) {
    obj[s[i]] = obj[s[i]] ? obj[s[i]] + 1 : 1;
  }

  // [STEP]: Form longest palindrome
  for (key in obj) {
    // [CASE]: If letter count % 2 == 0, letter can form pairs.
    if (obj[key] % 2 == 0) {
      result += obj[key];
    } else {
      /** [CASE]: If letter count % 2 != 0, letter be added to result - 1. 
          Finally 1 more odded letter can be placed in the middle. */
      result += obj[key] - 1;
      flag = true;
    }
  }
  return flag ? result + 1 : result;
};
