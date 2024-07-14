/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
  let count = 0;
  let str = String(num);
  for (let i = 0; i < str.length; i++) {
    if (num % str[i] == 0) {
      count++;
    }
  }
  return count;
};
