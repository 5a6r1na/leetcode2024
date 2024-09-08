/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let obj = {};

  // [STEP]: Construct hashmap.
  for (let i = 0; i < strs.length; i++) {
    // [STEP]: Sort characters of strs to use as key.
    let sortedStr = strs[i].split("").sort().join("");

    // [CASE]: If key exists, push original string.
    if (obj[sortedStr]) {
      obj[sortedStr].push(strs[i]);
    } else {
      // [CASE]: If key does NOT exists, create new array.
      obj[sortedStr] = [strs[i]];
    }
  }

  // [STEP]: Collect the grouped anagrams into the result array
  return Object.values(obj);
};
