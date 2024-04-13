/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeNodes = function (head) {
  // reaches base case
  if (!head) return null;

  // recursively call removeNodes
  head.next = removeNodes(head.next);

  // if next node is larger then current node
  if (head.next && head.val < head.next.val) {
    return head.next;
  }
  return head;
};
