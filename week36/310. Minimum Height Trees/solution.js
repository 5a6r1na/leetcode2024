/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
  // [CASE]: If the tree has exactly 1 node.
  if (n == 1) return [0];

  // [STEP]: Initialize empty adjacency list.
  //   let adjList = {};

  // [STEP]: Initialize empty adjacency list.
  let adjList = Array.from({ length: n }, () => []);

  // [STEP]: Fill all the edges to the adjacency list.
  for (let [i, j] of edges) {
    adjList[j].push(i);
    adjList[i].push(j);
  }

  let leaves = [];

  // [STEP]: Check if node is a leaf.
  for (let node in adjList) {
    // [CASE]: Node one connection(is a leaf). Push to leaves list.
    if (adjList[node].length == 1) {
      leaves.push(parseInt(node));
    }
  }

  // [STEP]: Trim leaves until only one or two nodes left.
  while (n > 2) {
    n -= leaves.length;
    let newLeaves = [];

    for (let leaf of leaves) {
      // [STEP]: Retrieve a node connected to the leaf.
      let node = adjList[leaf].pop();

      // [STEP]: Remove leaf from the node's adjacency list.
      adjList[node].splice(adjList[node].indexOf(leaf), 1);

      // [CASE]: If the node has now become a leaf, only one connection, the new leaf(node) to the newLeaves list.
      if (adjList[node].length == 1) {
        newLeaves.push(node);
      }
    }
    // [STEP]:Update leaves.
    leaves = newLeaves;
  }

  return leaves;
};
