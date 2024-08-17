/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  let length = intervals.length;

  // [STEP]: Sort intervals
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [intervals[0]];

  // [STEP]: skip first interval since it has been added as most recent interval
  for (let i = 1; i < length; i++) {
    // [VAR]: For the ost recently added to result interval
    const [LastStart, LastEnd] = result[result.length - 1];
    // [VAR]: For current interval
    const [CurrStart, CurrEnd] = intervals[i];

    // [CASE]: Overlapping interval, merge than add to result
    if (CurrStart <= LastEnd) {
      // [CASE]: Math.max to handle when Last interval could have a greater End value
      result[result.length - 1] = [LastStart, Math.max(LastEnd, CurrEnd)];
    } else {
      // [CASE:  NOT overlapping, add to result
      result.push(intervals[i]);
    }
  }
  return result;
};
