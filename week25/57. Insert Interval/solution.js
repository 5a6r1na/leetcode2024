/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  const result = [];
  let currMin = newInterval[0];
  let currMax = newInterval[1];
  let index = 0;

  // [CASE]: no overlaps
  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][1] < newInterval[0]) {
      result.push(intervals[i]);
      index++;
    } else if (intervals[i][0] > newInterval[1]) {
      result.push(intervals[i]);
      // [CASE]: with overlaps
    } else if (intervals[i][0] <= newInterval[0]) {
      if (intervals[i][1] >= newInterval[1]) {
        currMax = intervals[i][1];
      }
      currMin = intervals[i][0];
    } else if (intervals[i][1] >= newInterval[1]) {
      currMax = intervals[i][1];
    }
  }
  // Insert to result array with at specific index
  result.splice(index, 0, [currMin, currMax]);
  return result;
};
