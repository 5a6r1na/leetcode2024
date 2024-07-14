## 525. Contiguous Array

📎 Link: [Contiguous Array](https://leetcode.com/problems/contiguous-array/description/)<br>
🟠 Difficulty: Medium<br>
👩🏻‍💻 Topics: Array, Hash Table, Prefix Sum<br>

=======================================================================================<br>
You are given an integer array nums and an integer k. Find the maximum subarray sum of all the subarrays of nums that meet the following conditions:<br>

- The length of the subarray is k, and
- All the elements of the subarray are distinct.

Return the maximum subarray sum of all the subarrays that meet the conditions. If no subarray meets the conditions, return 0.<br>

A subarray is a contiguous non-empty sequence of elements within an array.<br>

<br>
Example 1:<br>
Input: nums = [0,1]<br>
Output: 2<br>
Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.<br>

<br>
Example 2:<br>
Input: nums = [0,1,0]<br>
Output: 2<br>
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.<br>
<br>
Constraints:<br>

- 1 <= nums.length <= 10^5
- nums[i] is either 0 or 1.

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

1.  [Hash Table](https://www.w3schools.com/dsa/dsa_theory_hashtables.php) <br>

- **Hash Table, aka Hash Set, is used to check if an element is in the set.** Like checking if a name is on a guest list.

### Plan

> - Sketch visualizations and write pseudocode
> - Walk through a high level implementation with an existing diagram

General Idea: Use Prefix Sum to pre calculate a total sum and quickly calculate the sum of any subarray by simply subtracting two cumulative sums. Calculate the absolute differences and replace the minimum each time.

1. Turn input integer into array:

- .

2. Keep record of signed input:

- Initiate another for-loop to calculate the subarrays. Calculate the left subarray starting far left and move towards the right. Each time calculate the right subarray utilizing the pre-calculated total.

3. Handle when number starts with zero:

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
