## 1477. Find Two Non-overlapping Sub-arrays Each With Target Sum

📎 Link: [Find Two Non-overlapping Sub-arrays Each With Target Sum](https://leetcode.com/problems/find-two-non-overlapping-sub-arrays-each-with-target-sum/description/)<br>
🟠 Difficulty: Medium<br>
👩🏻‍💻 Topics: Array, Hash Table, Binary Search, Dynamic Programming, Sliding Window<br>

=======================================================================================<br>

You are given a 0-indexed integer array forts of length n representing the positions of several forts. forts[i] can be -1, 0, or 1 where:<br>

- -1 represents there is no fort at the ith position.
- 0 indicates there is an enemy fort at the ith position.
- 1 indicates the fort at the ith the position is under your command.<br>

Now you have decided to move your army from one of your forts at position i to an empty position j such that:<br>

- 0 <= i, j <= n - 1
- The army travels over enemy forts only. Formally, for all k where min(i,j) < k < max(i,j), forts[k] == 0.<br>
  While moving the army, all the enemy forts that come in the way are captured.<br>

Return the maximum number of enemy forts that can be captured. In case it is impossible to move your army, or you do not have any fort under your command, return 0.<br>

Example 1:<br>
Input: forts = [1,0,0,-1,0,0,0,0,1]<br>
Output: 4<br>
Explanation:<br>

- Moving the army from position 0 to position 3 captures 2 enemy forts, at 1 and 2.
- Moving the army from position 8 to position 3 captures 4 enemy forts.<br>
  Since 4 is the maximum number of enemy forts that can be captured, we return 4.<br>

Example 2:<br>
Input: forts = [0,0,1,-1]<br>
Output: 0<br>
Explanation: Since no enemy fort can be captured, 0 is returned.<br>

Constraints:<br>

- 1 <= forts.length <= 1000
- -1 <= forts[i] <= 1

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
