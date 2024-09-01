/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  // [ATOI: Whitespace]
  // [STEP]: Trim leading and trailing whitespaces.
  s = s.trim();
  let length = s.length;

  // [CASE]: S is empty after trimming.
  if (length == 0) return 0;

  // [ATOI: Signedness]
  let sign = 1;
  let i = 0;

  if (s[i] == "+" || s[i] == "-") {
    // [CASE]: If signed to negative, set sign to -1.
    sign = s[i] == "-" ? -1 : 1;
    i++;
  }

  // [ATOI: Conversion]
  let parsed = 0;
  let result = 0;

  while (i < length) {
    let current = s[i];

    // [CASE]: If character is NOT a digit, break out of loop.
    // [STEP]: If the character comes before '0' in the ASCII table is NOT a digit.
    // [STEP]: If the character comes after '9' in the ASCII table is NOT a digit.
    if (current < "0" || current > "9") {
      break;
    }

    // [CASE]: If character is a digit, convert to integer.
    result = result * 10 + (current.charCodeAt(0) - "0".charCodeAt(0));
    i++;
  }

  // [ATOI: Rounding]
  // [STEP]: Apply sign to parsed result.
  result = sign * result;

  const min = -(2 ** 31);
  const max = 2 ** 31 - 1;

  // [CASE]: If result < -2^31.
  if (result < min) return min;
  // [CASE]: If result > 2^31 - 1.
  if (result > max) return max;

  return result;
};
