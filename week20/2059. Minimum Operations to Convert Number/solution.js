/**
 * @param {number[]} nums
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minimumOperations = function (nums, start, goal) {
  // define queue
  const q = [];
  // track visited number
  const seen = new Set();
  // set queue starting number and step count
  q.push([start, 0]);
  // first visited number
  seen.add(start);
  // track current queue position
  let front = 0;

  // operations
  const operations = [(n, m) => n + m, (n, m) => n - m, (n, m) => n ^ m];

  // while-loop: still elements unvisited
  while (front < q.length) {
    //
    let length = q.length - front;

    while (length > 0) {
      let [num, steps] = q[front];
      front++;
      length--;

      for (const operation of operations) {
        for (const n of nums) {
          // calculate a newNem with all operations
          const newNum = operation(num, n);

          // reached goal, calculate the steps taken, operation to reach goal is an additional step
          if (newNum === goal) {
            return steps + 1;
          }
          // If newNum is within valid range and not seen before, add to the queue and marked seen.
          if (0 <= newNum && newNum <= 1000 && !seen.has(newNum)) {
            seen.add(newNum);
            q.push([newNum, steps + 1]);
          }
        }
      }
    }
  }
  // if no finding of goal
  return -1;
};
