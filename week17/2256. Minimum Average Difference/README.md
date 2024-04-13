## 2256. Minimum Average Difference

📎 Link: [Minimum Average Difference](https://leetcode.com/problems/minimum-average-difference/description/)<br>
🟠 Difficulty: Medium<br>
👩🏻‍💻 Topics: Array, Prefix Sum<br>

=======================================================================================<br>
You are given a 0-indexed integer array nums of length n.<br>

The average difference of the index i is the absolute difference between the average of the first i + 1 elements of nums and the average of the last n - i - 1 elements. Both averages should be rounded down to the nearest integer.<br>

Return the index with the minimum average difference. If there are multiple such indices, return the smallest one.<br>

Note:<br>

- The absolute difference of two numbers is the absolute value of their difference.
- The average of n elements is the sum of the n elements divided (integer division) by n.
- The average of 0 elements is considered to be 0.

<br>
Example 1:<br>
Input: nums = [2,5,3,9,5,3]<br>
Output: 3<br>
Explanation:<br>
- The average difference of index 0 is: |2 / 1 - (5 + 3 + 9 + 5 + 3) / 5| = |2 / 1 - 25 / 5| = |2 - 5| = 3.<br>
- The average difference of index 1 is: |(2 + 5) / 2 - (3 + 9 + 5 + 3) / 4| = |7 / 2 - 20 / 4| = |3 - 5| = 2.<br>
- The average difference of index 2 is: |(2 + 5 + 3) / 3 - (9 + 5 + 3) / 3| = |10 / 3 - 17 / 3| = |3 - 5| = 2.<br>
- The average difference of index 3 is: |(2 + 5 + 3 + 9) / 4 - (5 + 3) / 2| = |19 / 4 - 8 / 2| = |4 - 4| = 0.<br>
- The average difference of index 4 is: |(2 + 5 + 3 + 9 + 5) / 5 - 3 / 1| = |24 / 5 - 3 / 1| = |4 - 3| = 1.<br>
- The average difference of index 5 is: |(2 + 5 + 3 + 9 + 5 + 3) / 6 - 0| = |27 / 6 - 0| = |4 - 0| = 4.<br>
  The average difference of index 3 is the minimum average difference so return 3.<br>
<br>
Example 2:<br>
Input: nums = [0]<br>
Output: 0<br>
Explanation:<br>
The only index is 0 so return 0.<br>
The average difference of index 0 is: |0 / 1 - 0| = |0 - 0| = 0.<br>
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

1.  Prefix Sum <br>

- **Prefix Sum(cumulative sum) is a technique use in array processing**. It involves generating an auxiliary array where each element represents the sum of all elements from the beginning of the input array up to that element.
- The intuition behind this approach is that it allows for efficient computation of subarray sums. This technique is particularly useful in scenarios where we need to repeatedly query the sum of subarrays, such as in range sum queries or finding subarrays with a specific sum.

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
