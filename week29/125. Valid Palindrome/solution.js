/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let length = s.length;

  // [CASE]: If empty string, string is palindrome.
  if (length == 0) return true;

  // [STEP]: Uppercase to lower case and remove non-char.
  let newList = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let newLength = newList.length;

  // [STEP]: Move pointers toward the middle.
  let left = 0;
  let right = newLength - 1;
  for (let i = 0; i < newLength; i++) {
    // [CASE]: If left != right, string is NOT palindrome.
    if (newList[left] !== newList[right]) {
      return false;
      // [CASE]: If left == right, move pointer to next position.
    } else {
      left++;
      right--;
    }
  }
  return true;
};
