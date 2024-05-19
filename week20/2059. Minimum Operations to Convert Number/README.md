## 1590. Make Sum Divisible by P

📎 Link: [1590. Make Sum Divisible by P](https://leetcode.com/problems/make-sum-divisible-by-p/description/)<br>
🟠 Difficulty: Medium<br>
👩🏻‍💻 Topics: Array, Hash Table, Prefix Sum<br>

=======================================================================================<br>
Given an array of positive integers nums, remove the smallest subarray (possibly empty) such that the sum of the remaining elements is divisible by p. It is not allowed to remove the whole array.<br>

Return the length of the smallest subarray that you need to remove, or -1 if it's impossible.<br>

A subarray is defined as a contiguous block of elements in the array.<br>

<br>
Example 1:<br>
Input: nums = [3,1,4,2], p = 6<br>
Output: 1<br>
Explanation: The sum of the elements in nums is 10, which is not divisible by 6. We can remove the subarray [4], and the sum of the remaining elements is 6, which is divisible by 6.<br>
<br>
Example 2:<br>
Input: nums = [6,3,5,2], p = 9<br>
Output: 2<br>
Explanation: We cannot remove a single element to get a sum divisible by 9. The best way is to remove the subarray [5,2], leaving us with [6,3] with sum 9.<br>
<br>
Example 3:<br>
Input: nums = [1,2,3], p = 3<br>
Output: 0<br>
Explanation: Here the sum is 6. which is already divisible by 3. Thus we do not need to remove anything.<br>
<br>
Constraints:<br>

- 1 <= nums.length <= 105
- 1 <= nums[i] <= 109
- 1 <= p <= 109

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
