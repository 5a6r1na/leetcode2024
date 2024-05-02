## 316. Remove Duplicate Letters

📎 Link: [Remove Duplicate Letters](https://leetcode.com/problems/remove-duplicate-letters/description/)<br>
🟠 Difficulty: Medium<br>
👩🏻‍💻 Topics: String, Stack, Greedy, Monotonic Stack<br>

=======================================================================================<br>

Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is
the smallest in lexicographical order among all possible results.<br>

Example 1:<br>
Input: s = "bcabc"<br>
Output: "abc"<br>

Example 2:<br>
Input: s = "cbacdcbc"<br>
Output: "acdb"<br>

Constraints:<br>

- 1 <= s.length <= 104
- s consists of lowercase English letters.

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

1. [Two Pointers](https://www.geeksforgeeks.org/two-pointers-technique/)<br>

- **Two pointers algorithm is typically used for searching pairs in a sorted array.**. Two pointers approach optimizes code via time complexities conpare to loops.
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
