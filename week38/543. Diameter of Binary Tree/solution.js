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
var diameterOfBinaryTree = function (root) {
  // [STEP]: Track max diameter
  let maxDiameter = 0;

  // [STEP]: Helper function to calculate depth and update the diameter
  function maxDepth(node) {
    // [CASE]: NO nodes (base case)
    if (!node) return 0;

    // [STEP]: Recursively calculate the depth of left and right subtrees
    let left = maxDepth(node.left);
    let right = maxDepth(node.right);

    // [STEP]: Update the maximum diameter
    maxDiameter = Math.max(maxDiameter, left + right);

    // [STEP]: Return height of the current node
    return Math.max(left, right) + 1;
  }

  maxDepth(root);
  return maxDiameter;
};
