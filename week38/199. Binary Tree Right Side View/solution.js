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
 * @return {number[]}
 */
var rightSideView = function (root) {
  // [CASE: If NO nodes return [] (base case)
  if (!root) return [];

  // [STEP]: Construct a queue
  let queue = [root];
  // [STEP]: Create empty array for the visible nodes
  let visible = [];

  // [CASE]: Keep checking each layer while queue is NOT empty
  while (queue.length > 0) {
    // [STEP]: Track the size of current level.
    let levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      // [STEP]: Identify the currrent node
      const node = queue.shift();

      // [CASE]: If the current node is the last node at this level, it is visible, add to the result
      if (i === levelSize - 1) {
        visible.push(node.val);
      }
      // [STEP]: Push the left child of current node into queue
      if (node.left) queue.push(node.left);
      // [STEP]: Push the right child of current node into queue
      if (node.right) queue.push(node.right);
    }
  }
  return visible;
};
