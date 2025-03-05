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
var maxDepth = function (root) {
  // [CASE]: NO nodes (base case)
  if (!root) return 0;
  // [STEP]: Check all of left branch
  let left = maxDepth(root.left);
  // [STEP]: Check all of right branch
  let right = maxDepth(root.right);
  // [STEP]: Calculate the height, traverse back when NO child nodes left
  return Math.max(left, right) + 1;
};
