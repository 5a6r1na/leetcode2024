## 2511. Maximum Enemy Forts That Can Be Captured

📎 Link: [Maximum Enemy Forts That Can Be Captured](https://leetcode.com/problems/maximum-enemy-forts-that-can-be-captured/description/)<br>
🟢 Difficulty: Easy<br>
👩🏻‍💻 Topics: Array, Two Pointers<br>

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
