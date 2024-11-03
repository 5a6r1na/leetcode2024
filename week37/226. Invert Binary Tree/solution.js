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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  // [CASE]: Base case when current node is null, return null.
  if (!root) return null;

  // [STEP]: Keep track of the left child in temp.
  let temp = root.left;

  // [STEP]: Swap the right child to the left.
  root.left = root.right;
  // [STEP]: Swap the left child to the right.
  root.right = temp;

  // [STEP]: Recursively calls the function invertTree to swap the new left and right child down the tree.
  invertTree(root.left);
  invertTree(root.right);

  // [STEP]: Return the inverted tree.
  return root;
};
