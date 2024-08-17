/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let sLen = s.length;
  let tLen = t.length;
  let objS = {};
  let objT = {};

  // [CASE]: s and t are diff length
  if (sLen !== tLen) {
    return false;
  }

  // [STEP]: Construct hashmap
  for (let i = 0; i < sLen; i++) {
    objS[s[i]] = objS[s[i]] ? objS[s[i]] + 1 : 1;
    objT[t[i]] = objT[t[i]] ? objT[t[i]] + 1 : 1;
  }

  // [STEP]: For each key in objS check objK
  for (const key in objS) {
    // [CASE]: Key in objS does NOT exist in objK
    if (objS[key] != objT[key]) {
      return false;
    }
  }
  return true;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // [STEP]: String to array, sort array, join as string to compare.
  return s.split("").sort().join("") === t.split("").sort().join("");

  /** [NOTE]: Comparing two arrays use == or === will only return true 
    if both arrays refer to the exact same object in memory, 
    not if they have the same contents.*/
};
