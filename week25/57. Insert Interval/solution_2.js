/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    const result = [];
    let left = 0;
    let right = intervals.length - 1;
    
    // [STEP]: Use Binary Search to determine correct index for newInterval
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (newInterval[0] < intervals[mid][0]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    // [STEP]: Insert to newInteravl to correct position
    intervals.splice(left, 0, newInterval);

    // [STEP]: Add the first interval to results
    result.push(intervals[0]);

    // [STEP]: Check for overlaps (Start from 1 because )
    for (let i = 1; i < intervals.length; i++) {
        // [DEFINE]: The latest interval added to result
        let lastInterval = result[result.length - 1];
        // [DEFINE]: Current interval to compare
        let currentInterval = intervals[i];

        // [CASE]: If intervals overlap, merge
        if (lastInterval[1] >= currentInterval[0]) {
            // [STEP]: Upadate interval in result with new number       
            result[result.length - 1] = [lastInterval[0], Math.max(lastInterval[1], currentInterval[1])];
        } else {
            // [CASE]: If NO overlap, add current interval to result 
            result.push(currentInterval);
        }
    }

    return result;
};
