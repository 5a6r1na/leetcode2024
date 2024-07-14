/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  let v1 = version1.split(".");
  let v2 = version2.split(".");

  let v1Len = v1.length;
  let v2Len = v2.length;

  for (let i = 0; i < Math.max(v1Len, v2Len); i++) {
    let num1 = i < v1Len ? parseInt(v1[i]) : 0;
    let num2 = i < v2Len ? parseInt(v2[i]) : 0;

    if (num1 < num2) {
      return -1;
    } else if (num1 > num2) {
      return 1;
    }
  }
  return 0;
};
