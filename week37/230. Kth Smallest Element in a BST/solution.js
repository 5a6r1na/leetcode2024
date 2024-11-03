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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let n = 0;
  let stack = [];
  let curr = root;

  // [CASE]: While there are nodes to process and stack is not empty. Continue to traverse the tree.
  /**
   * [NOTE]: while (curr || stack) is NOT correct because an empty array is still True.
   */
  while (curr || stack.length > 0) {
    // [STEP]: Start traversing the left branch.
    while (curr) {
      // [STEP]: Add current node to stack.
      stack.push(curr);
      // [STEP]: Move to the next left node.
      curr = curr.left;
    }
    // [CASE]:End of current branch, pop nodes from stack LIFO.
    curr = stack.pop();
    // [STEP]: Increment count.
    n++;

    // [CASE]: If count equals the targeted Kth index, return the value.
    if (n == k) {
      return curr.val;
    }

    // [CASE]: Move to process the right branch.
    curr = curr.right;
  }

  // [STEP]: If k is out of bounds, return.
  return;
};
