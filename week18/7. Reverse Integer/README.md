## 7. Reverse Integer

📎 Link: [Reverse Integer](https://leetcode.com/problems/reverse-integer/description/)<br>
🟠 Difficulty: Medium<br>
👩🏻‍💻 Topics: Math<br>

=======================================================================================<br>
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.<br>

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).<br>

Example 1:<br>
Input: x = 123<br>
Output: 321<br>

Example 2:<br>
Input: x = -123<br>
Output: -321<br>

Example 3:<br>
Input: x = 120<br>
Output: 21<br>

Constraints:

- -231 <= x <= 231 - 1<br>

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

1.  Math

### Plan

> - Sketch visualizations and write pseudocode
> - Walk through a high level implementation with an existing diagram

General Idea: Convert input number to an array. Use array methods to reverse numbers. Keep track of signed numbers. Join array elements. Return int form to avoid extra zeros.

1. Convert input number to an array:

- Convert input int to string and split to an array.

2. Check for signed number:

- Keep track of signed number. Remove from current array and push to reversed array.

3. Reverse current array:

- Reverse the array by using array methods pop() and push().

4. Join array elements:

- Use join() method.

5. Handle extra zeros after reverse:

- parseInt to avoid extra zeros and return a number

### Implement

> - Implement the solution (make sure to know what level of detail the interviewer wants)

see solution.py

### Review

> - Re-check that your algorithm solves the problem by running through important examples
> - Go through it as if you are debugging it, assuming there is a bug

### Evaluate

> - Finish by giving space and run-time complexity
> - Discuss any pros and cons of the solution

- Time Complexity: O(d)
- Space Complexity: O(d)<br>
  (d: digits in x)
