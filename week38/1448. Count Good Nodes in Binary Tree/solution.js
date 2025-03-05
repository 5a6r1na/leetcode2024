/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function (root) {
  // [STEP]: Initialize a counter to keep track of good nodes
  let goodCount = 0;

  // [STEP]: Helper function to recursively traverse the tree
  function countGood(node, maxVal) {
    // [CASE]: If the node is null, return
    if (!node) return;

    // [CASE]: If the current node's value is greater than or equal to maxVal, it's a good node
    if (node.val >= maxVal) {
      goodCount++;
    }

    // [STEP]: Update the maximum value seen so far along the path
    let newMaxVal = Math.max(maxVal, node.val);

    // [STEP]: Recursively visit the left and right children
    countGood(node.left, newMaxVal);
    countGood(node.right, newMaxVal);
  }

  // [STEP]: Start the recursion from the root, with an initial maxVal of negative infinity
  countGood(root, -Infinity);

  // [STEP]: Return the total count of good nodes
  return goodCount;
};
