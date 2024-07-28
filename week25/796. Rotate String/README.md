## 1022. Sum of Root To Leaf Binary Numbers

📎 Link: [Sum of Root To Leaf Binary Numbers](https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/description/)<br>
🟢 Difficulty: Easy<br>
👩🏻‍💻 Topics: Tree, Depth-First Search, Binary Tree<br>

=======================================================================================<br>

You are given the root of a binary tree where each node has a value 0 or 1. Each root-to-leaf path represents a binary number starting with the most significant bit.

- For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101 in binary, which is 13.

For all leaves in the tree, consider the numbers represented by the path from the root to that leaf. Return the sum of these numbers.

The test cases are generated so that the answer fits in a 32-bits integer.<br>

Example 1:<br>
Input: root = [1,0,1,0,1,0,1]<br>
Output: 22<br>
Explanation: (100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22<br>

Example 2:<br>
Input: root = [0]<br>
Output: 0<br>

Constraints:<br>

- The number of nodes in the tree is in the range [1, 1000].
- Node.val is 0 or 1.

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

1. [Stack](https://www.geeksforgeeks.org/two-pointers-technique/)<br>

- **Two pointers algorithm is typically used for searching pairs in a sorted array.**. Two pointers approach optimizes code via time complexities conpare to loops.
- The intuition behind Two Pointers is to traverse the array simultaneously. With pointers typically move at different speeds or in different directions.

- Efficieny compared with Loop:
  - Loop:
    - Time Complexity: O(N^2)
    - Space Complexity: O(1)
  - Two Pointer:
    - Time Complexity: O(N)
    - Space Complexity: O(1)

2. [Greedy](https://www.geeksforgeeks.org/greedy-algorithms/)<br>

- **A greedy algorithm is a type of optimization algorithm that makes locally optimal choices at each step to find a globally optimal solution**
- The intuition behind Two Pointers is to traverse the array simultaneously. With pointers typically move at different speeds or in different directions.

- Efficieny compared with Loop:
  - Loop:
    - Time Complexity: O(N^2)
    - Space Complexity: O(1)
  - Two Pointer:
    - Time Complexity: O(N)
    - Space Complexity: O(1)

### Plan

> - Sketch visualizations and write pseudocode
> - Walk through a high level implementation with an existing diagram

General Idea: Use Two Pointers to run through the array.

1. Initialize Two Pointers:

- Left pointer at position 0 and right pointer at i.

2. Initiate for loop and check condition:

- Iterate through each element to check if:
  - Current position(fort[i]) is not zero(enemy fort).
  - Left and Right pointer have different values, to indicate a capture action.

3. Calculate distance and keep track:

- Calculate the distance between Left and Right pointer to represent the number of enemies captured. Keep track of the current max and replace.

4. Update Left pointer position:

- When Right pointer is not zero, update the Left pointer accordingly to indicate a new round of capture.

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
