/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
  // [STEP]: Inititate HashMap.
  let hashmap = new Map();

  // [STEP]: Define dfs function to create clone.
  function dfsCloneNode(node) {
    // [CASE]: If node is empty, return node.
    if (!node) return node;

    // [CASE]: If clone of node exists in HashMap, return value of key in HashMap.
    if (hashmap.has(node)) {
      // [STEP]: Get value of node in HashMap.
      return hashmap.get(node);
    }

    // [CASE]: If clone of node does NOT exist in HashMap, create clone.
    // [STEP]: Create clone.
    let clone = new _Node(node.val);
    // [STEP]: Add to HashMap
    hashmap.set(node, clone);

    // [STEP]: Clone all the node's neighbor values.
    for (let neighbor of node.neighbors) {
      // [STEP]: Perform dfsCloneNode on all neighbors
      // [STEP]: Push all the cloned neighbor values to the cloned node's neighbors array.
      clone.neighbors.push(dfsCloneNode(neighbor));
    }

    // [STEP]: Return node clone.
    return clone;
  }

  // [STEP]: Return clone graph.
  return dfsCloneNode(node);
};
