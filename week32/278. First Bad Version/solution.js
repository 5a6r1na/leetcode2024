/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    // [NOTE]: Versions are [1, 2, ..., n] based.
    let left = 1;
    let right = n;

    /** If left == right loop exits,
      meaning search has narrowed down to a single version(first bad version). */
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      // [CASE]: Current version is bad, move right pointer down to check prev.
      if (isBadVersion(mid)) {
        right = mid;
        // [CASE]: Current version is NOT bad, move left pointer up to check next.
      } else {
        left = mid + 1;
      }
    }
    // [CASE]: left == right, first bad version index found.
    return right;
  };
};
