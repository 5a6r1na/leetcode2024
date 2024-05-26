## 2520. Count the Digits That Divide a Number

📎 Link: [Count the Digits That Divide a Number](https://leetcode.com/problems/count-the-digits-that-divide-a-number/description/)<br>
🟢 Difficulty: Easy<br>
👩🏻‍💻 Topics: Math<br>

=======================================================================================<br>

Given an integer num, return the number of digits in num that divide num.
An integer val divides nums if nums % val == 0.<br>

Example 1:<br>
Input: num = 7<br>
Output: 1<br>
Explanation: 7 divides itself, hence the answer is 1.<br>

Example 2:<br>
Input: num = 121<br>
Output: 2<br>
Explanation: 121 is divisible by 1, but not 2. Since 1 occurs twice as a digit, we return 2.<br>

Example 3:<br>
Input: num = 1248<br>
Output: 4<br>
Explanation: 1248 is divisible by all of its digits, hence the answer is 4.<br>

Constraints:<br>

- 1 <= num <= 10^9
- num does not contain 0 as one of its digits.

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
