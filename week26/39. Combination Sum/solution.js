/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let length = candidates.length;
  let result = [];
  let curr = [];
  let total = 0;

  // [DFS]: create dfs function, Two decisions are made, with or without candidates[i]
  function dfs(i, curr, total) {
    // [CASE]: base-case where total equals target
    if (total == target) {
      // [STEP]: curr needs to be copied so the following process does not interfere the current combination
      result.push([...curr]);
      return;
    }

    // [CASE]: base-case where total exceeds target or candidates are fully looped
    if (i >= length || total > target) {
      return;
    }

    // [CASE]: Decision where candidates[i] is included in the current combination
    // [STEP]: push candidate into current combination
    curr.push(candidates[i]);
    // [STEP]: start from current candidate and adds candidate to total
    dfs(i, curr, total + candidates[i]);
    // [CASE]: Decision where candidates[i] is NOT included in the current combination
    // [STEP]: remove candidate into current combination
    curr.pop();
    // [STEP]: start from next candidate and not add current candidate to total
    dfs(i + 1, curr, total);
  }

  dfs(0, curr, total);
  return result;
};
