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
