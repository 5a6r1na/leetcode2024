/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[][]}
 */

var substringXorQueries = function (s, queries) {
  let ans = [];
  for (let i = 0; i < queries.length; i++) {
    // XOR
    let x = queries[i][0] ^ queries[i][1];
    // turn to binary
    let binary = x.toString(2);
    // starts from index j
    let index = s.indexOf(binary);

    if (index == -1) ans.push([-1, -1]);
    else ans.push([index, index + binary.length - 1]);
  }
  return ans;
};
