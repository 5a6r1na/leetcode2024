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
var isValidBST = function (root) {
  function validate(root, left, right) {
    // [CASE]: Tree has been traversed.
    if (!root) return true;

    // [CASE]: If current node value out of bounds.
    if (root.val <= left || root.val >= right) {
      return false;
    }

    // [STEP]: Recursively validate left and right subtrees.
    return (
      validate(root.left, left, root.val) &&
      validate(root.right, root.val, right)
    );
  }

  // [STEP]: Start validation with full range of infinite valid values.
  return validate(root, -Infinity, Infinity);
};
