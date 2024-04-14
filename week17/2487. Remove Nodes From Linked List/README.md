## 2487. Remove Nodes From Linked List

📎 Link: [Remove Nodes From Linked List](https://leetcode.com/problems/remove-nodes-from-linked-list/description/)<br>
🟠 Difficulty: Medium<br>
👩🏻‍💻 Topics: Linked List, Stack, Recursion, Monotonic Stack<br>

=======================================================================================<br>
You are given the head of a linked list.<br>

Remove every node which has a node with a greater value anywhere to the right side of it.<br>

Return the head of the modified linked list.<br>

Example 1:<br>
Input: head = [5,2,13,3,8]<br>
Output: [13,8]<br>
Explanation: The nodes that should be removed are 5, 2 and 3.

- Node 13 is to the right of node 5.<br>
- Node 13 is to the right of node 2.<br>
- Node 8 is to the right of node 3.<br>

Example 2:<br>
Input: head = [1,1,1,1]<br>
Output: [1,1,1,1]<br>
<br>
Constraints:

- The number of the nodes in the given list is in the range [1, 105].<br>
- 1 <= Node.val <= 105<br>

=======================================================================================<br>

### UMPIRE Method:

#### Understand

> - Ask clarifying questions and use examples to understand what the interviewer wants out of this problem.
> - Choose a “happy path” test input, different than the one provided, and a few edge case inputs.
> - Verify that you and the interviewer are aligned on the expected inputs and outputs.

1. Any requirement on time/space complexity?

- No

### Match

> - See if this problem matches a problem category (e.g. Strings/Arrays) and strategies or patterns within the category

1.  [Recursion](https://www.geeksforgeeks.org/introduction-to-recursion-data-structure-and-algorithm-tutorials/) / [🎞️](https://www.youtube.com/watch?v=ivl5-snqul8)

- **Recursion is a programming technique where a function calls itself in its own definition**. It's a concept used to solve problems by breaking them down into smaller instances of the same problem until reaching a base case.

- **Recursion uses more memory**, because the recursive function adds to the stack with each recursive call, and keeps the values there until the call is finished. The **recursive function uses LIFO Structure** (stack data structure).

- Features:
  - Performing the same operations multiple times with different inputs.
  - Try smaller inputs to make the problem smaller in each step.
  - Base condition is needed to stop the recursion otherwise infinite loop will occur.

2. [Monotonic Stack](https://www.geeksforgeeks.org/introduction-to-monotonic-stack-data-structure-and-algorithm-tutorials/) / [🎞️](https://www.youtube.com/watch?v=Dq_ObZwTY_Q)

- **A monotonic stack is a data structure whose elements (starting from the bottom) are monotonically increasing or decreasing.** The monotonic stack problem is mainly the previous/next smaller/larger problem. It maintains monotonicity while popping elements when a new item is pushed into the stack.

- Features:
  - It is a range of queries in an array situation
  - The minima/maxima elements
  - Elements popped from the monotonic stack, will never be utilised again.
- Math:

  - **monotonically increasing:** As x increases, y also increases always.
  - **monotonically decreasing:** As x increases, y decreases always.

### Plan

> - Sketch visualizations and write pseudocode
> - Walk through a high level implementation with an existing diagram

General Idea: Recursively call removeNodes() to check if the current node (head) should be removed. Implement the Monotonic Stack concept to remove nodes.

1. Define base case to prevent infinite loop:

- Return null when no more nodes.

2. Recursively call removeNodes():

- Inside the recursive call, removeNodes is called on the next node (head.next). This recursively traverses the linked list until the base case is reached.

3. Check if the current node should be removed:

- Define the condition that the next node(head.next) is greater than the current node(head).
- If true, remove current node and return next node, else return current node.

### Implement

> - Implement the solution (make sure to know what level of detail the interviewer wants)

see solution.py

### Review

> - Re-check that your algorithm solves the problem by running through important examples
> - Go through it as if you are debugging it, assuming there is a bug

### Evaluate

> - Finish by giving space and run-time complexity
> - Discuss any pros and cons of the solution

- Time Complexity: O(N)
- Space Complexity: O(N)
