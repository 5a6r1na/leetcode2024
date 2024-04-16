## 2385. Amount of Time for Binary Tree to Be Infected

📎 Link: [Amount of Time for Binary Tree to Be Infected](https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/description/)<br>
🟠 Difficulty: Medium<br>
👩🏻‍💻 Topics: Tree, Depth-First Search, Breadth-First Search, Binary Tree<br>

=======================================================================================<br>
You are given a binary string s, and a 2D integer array queries where queries[i] = [firsti, secondi].<br>

For the ith query, find the shortest substring of s whose decimal value, val, yields secondi when bitwise XORed with firsti. In other words, val ^ firsti == secondi.<br>

The answer to the ith query is the endpoints (0-indexed) of the substring [lefti, righti] or [-1, -1] if no such substring exists. If there are multiple answers, choose the one with the minimum lefti.<br>

Return an array ans where ans[i] = [lefti, righti] is the answer to the ith query.<br>

A substring is a contiguous non-empty sequence of characters within a string.<br>

Example 1:<br>
Input: s = "101101", queries = [[0,5],[1,2]]<br>
Output: [[0,2],[2,3]]<br>
Explanation: For the first query the substring in range [0,2] is "101" which has a decimal value of 5, and 5 ^ 0 = 5, hence the answer to the first query is [0,2]. In the second query, the substring in range [2,3] is "11", and has a decimal value of 3, and 3 ^ 1 = 2. So, [2,3] is returned for the second query.<br>

Example 2:<br>
Input: s = "0101", queries = [[12,8]]<br>
Output: [[-1,-1]]
Explanation: In this example <br>there is no substring that answers the query, hence [-1,-1] is returned.<br>

Example 3:<br>
Input: s = "1", queries = [[4,5]]<br>
Output: [[0,0]]<br>
Explanation: For this example, the substring in range [0,0] has a decimal value of 1, and 1 ^ 4 = 5. So, the answer is [0,0].<br>
<br>
Constraints:<br>

- 1 <= nums.length <= 105<br>
- 0 <= nums[i] <= 105<br>

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

1. Array<br>

- **Prefix Sum(cumulative sum) is a technique use in array processing**. It involves generating an auxiliary array where each element represents the sum of all elements from the beginning of the input array up to that element.
- The intuition behind this approach is that it allows for efficient computation of subarray sums. This technique is particularly useful in scenarios where we need to repeatedly query the sum of subarrays, such as in range sum queries or finding subarrays with a specific sum.

2. String<br>
3. Bit Manipulation<br>

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
