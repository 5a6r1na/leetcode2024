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
 * @return {boolean}
 */
var isBalanced = function (root) {
  function checkBalance(root) {
    // [CASE]: Base case when current node is null, return pair balanced and height 0.
    if (!root) return [true, 0];

    // [STEP]: Recursivelt check left branch.
    let left = checkBalance(root.left);
    // [STEP]: Recursivelt check right branch.
    let right = checkBalance(root.right);

    /**
     * [CASE]: Node is considered balanced when:
     * 1. Left branch is balanced.
     * 2. Right branch is balanced.
     * 3. Height difference is smaller or equal to 1.
     */
    let balanced = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1;

    // [STEP]: Return the result with balanced and height of tallest branch.
    return [balanced, Math.max(left[1], right[1]) + 1];
  }

  // [STEP]: Return the final result.
  return checkBalance(root)[0];
};
