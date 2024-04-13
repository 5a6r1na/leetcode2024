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

1.  Recursion<br>

- **Recursion is a programming technique where a function calls itself in its own definition**. It's a concept used to solve problems by breaking them down into smaller instances of the same problem until reaching a base case.
- The intuition behind recursion is to solve complex problems by dividing them into more manageable subproblems. Each recursive call operates on a smaller input, and the results of these calls are combined to solve the original problem. Recursion is particularly useful for problems that exhibit self-similarity or can be naturally expressed in terms of smaller instances of themselves.

### Plan

> - Sketch visualizations and write pseudocode
> - Walk through a high level implementation with an existing diagram

General Idea: Use Prefix Sum to pre calculate a total sum and quickly calculate the sum of any subarray by simply subtracting two cumulative sums. Calculate the absolute differences and replace the minimum each time.

1. Pre calculate the total:

- Initiate a for-loop to calculate sum of the entire Array and assign to a variable.

2. Calculate sum of subarrays:

- Initiate another for-loop to calculate the subarrays. Calculate the left subarray starting far left and move towards the right. Each time calculate the right subarray utilizing the pre-calculated total.

3. Handle when divisor is zero:

- The divisor(rightCount) for calculating the right subarray will always end up being zero. Handle the case with ternary operator (i == length - 1 ? 1 : rightCount).
- The expression to evaluate when the condition is true could be any number, since the rightSum would be zero as well.

4. Calculate absolute difference:

- After computing both left and right average, calculate the abosulte difference.

5. Replace the minimum difference:

- Compare the current difference with the stored minimum difference each time and replace with the smaller one.
- Keep track of the index and return.

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
- Space Complexity: O(1)
