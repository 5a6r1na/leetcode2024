/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let signed = false;

  // Convert input Number to Array
  function integerToArray(x) {
    // Convert the integer to a string and split
    let digits = x.toString().split("");

    // Check signed number
    if (digits[0] == "-") {
      // remove sign
      digits.shift();
      signed = true;
    }
    return digits;
  }

  // Reverse Array
  function reverseArray(currArray) {
    let reversedArray = [];

    // push sign to reversedArray in advance
    if (signed) reversedArray.push("-");

    // reverse current array
    while (currArray.length) {
      reversedArray.push(currArray.pop());
    }
    return reversedArray;
  }

  let currArray = integerToArray(x);
  // Join Array into string
  let str = reverseArray(currArray).join("");
  // parseInt and avoid extra zero
  let result = parseInt(str);

  // check if result within Condition
  if ((-2) ** 31 <= result && result <= 2 ** 31 - 1) {
    return result;
  } else {
    return 0;
  }
};
