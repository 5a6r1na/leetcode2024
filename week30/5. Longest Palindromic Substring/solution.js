/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let length = s.length;

  // [CASE]: If length < 2, the palindrome is the string itself.
  if (length < 2) return s;

  let result = "";
  let max = 0;

  for (let i = 0; i < length; i++) {
    // [CASE]: Handle odd length palindromes. (Single center)
    let oddLeft = i,
      oddRight = i;
    // [STEP]: Expand window while right and left pointer are equals.
    while (oddLeft >= 0 && oddRight < length && s[oddLeft] === s[oddRight]) {
      oddLeft--;
      oddRight++;
    }

    // [STEP]: Calculate the current length of palindrome.
    let oddLength = oddRight - oddLeft - 1;
    // [STEP]: Compare with max. Replace if current is longer than max.
    if (oddLength > max) {
      max = oddLength;
      result = s.slice(oddLeft + 1, oddRight);
    }

    // [CASE]: Handle even length palindromes. (Double center)
    let evenLeft = i,
      evenRight = i + 1;
    // [STEP]: Expand window while right and left pointer are equals.
    while (
      evenLeft >= 0 &&
      evenRight < length &&
      s[evenLeft] === s[evenRight]
    ) {
      evenLeft--;
      evenRight++;
    }
    // [STEP]: Calculate the current length of palindrome.
    let evenLength = evenRight - evenLeft - 1;
    // [STEP]: Compare with max. Replace if current is longer than max.
    if (evenLength > max) {
      max = evenLength;
      result = s.slice(evenLeft + 1, evenRight);
    }
  }
  return result;
};
