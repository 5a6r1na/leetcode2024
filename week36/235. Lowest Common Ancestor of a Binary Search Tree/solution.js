/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  /**
  Binary Tree Structure: Each node in a BST has at most two children.
  For any given node:
  - All values in the left subtree are less than the node's value.
  - All values in the right subtree are greater than the node's value.
  - No Duplicate Nodes: Typically, BSTs do not allow duplicate values.
  
  */

  let curr = root;

  // [STEP]: Traverse through the tree.
  while (curr) {
    // [CASE]: If both p and q have values greater than curr, move to the right child.
    if (p.val > curr.val && q.val > curr.val) {
      curr = curr.right;
      // [CASE]: If both p and q have values less than curr, move to the left child.
    } else if (p.val < curr.val && q.val < curr.val) {
      curr = curr.left;
      // [CASE]: If LCA found.
    } else {
      return curr;
    }
  }
};
