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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let result = [];

  // [STEP]: Initialize a queue to track nodes.
  let queue = [];

  // [CASE]: If root exist, add root to queue
  if (root) {
    queue.push(root);
  }

  // [STEP]: Continue search if queue is NOT empty.
  while (queue.length > 0) {
    /**
     * [STEP]: Track current level queue size.
     * [NOTE]: queue.length changes dynamically during the loop, which will cause incorrect processing.
     */
    let size = queue.length;

    // [STEP]: Keep track of current level nodes.
    let level = [];

    // [STEP]: Loop through every node in queue.
    for (let i = 0; i < size; i++) {
      // [STEP]: Remove node from queue FIFO. Therefore, using shift().
      let node = queue.shift();

      // [CASE]: If node exists, push the node to current level tracker.
      if (node) {
        // [STEP]: Push node to current level tracker.
        level.push(node.val);
        // [STEP]: Add the left child to queue, even if left child is null.
        queue.push(node.left);
        // [STEP]: Add the right child to queue, even if right child is null.
        queue.push(node.right);
      }
    }
    // [CASE]: If level is NOT empty.
    if (level.length > 0) {
      // [STEP]: Add current level nodes all together to result.
      result.push(level);
    }
  }
  return result;
};
