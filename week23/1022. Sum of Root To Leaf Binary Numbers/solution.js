/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val);
 *     this.left = (left===undefined ? null : left);
 *     this.right = (right===undefined ? null : right);
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function (root) {
  if (!root) return 0;

  const dfs = (node, currentPath) => {
    currentPath += node.val;

    // Check leaf node
    if (!node.left && !node.right) {
      // Convert binary string
      return parseInt(currentPath, 2);
    }

    let sum = 0;
    // Left subtree
    if (node.left) {
      sum += dfs(node.left, currentPath);
    }
    // Right subtree
    if (node.right) {
      sum += dfs(node.right, currentPath);
    }

    return sum;
  };

  // Start DFS from root with empty path
  return dfs(root, "");
};
