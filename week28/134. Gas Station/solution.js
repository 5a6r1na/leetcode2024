/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let length = gas.length;
  let gasSum = 0;
  let costSum = 0;
  let currGas = 0;
  let pointer = 0;

  for (let i = 0; i < length; i++) {
    // [STEP]: Calculate gas sum.
    gasSum += gas[i];
    // [STEP]: Calculate gas sum.
    costSum += cost[i];
    // [STEP]: Calculate current gas sum in tank.
    currGas += gas[i] - cost[i];
    // [CASE]: Current gas sum < 0 means gas run out, reset pointer to next index.
    if (currGas < 0) {
      pointer = i + 1;
      currGas = 0;
    }
  }

  // [CASE]: If gasSum < costSum, NO possible solution.
  if (gasSum < costSum) {
    return -1;
  } else {
    // [CASE]: Gauranteed unique solution.
    return pointer;
  }
};
