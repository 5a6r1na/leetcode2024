## 1477. Find Two Non-overlapping Sub-arrays Each With Target Sum

📎 Link: [Find Two Non-overlapping Sub-arrays Each With Target Sum](https://leetcode.com/problems/find-two-non-overlapping-sub-arrays-each-with-target-sum/description/)<br>
🟠 Difficulty: Medium<br>
👩🏻‍💻 Topics: Array, Hash Table, Binary Search, Dynamic Programming, Sliding Window<br>

=======================================================================================<br>

You are given an array of integers arr and an integer target.<br>

You have to find two non-overlapping sub-arrays of arr each with a sum equal target. There can be multiple answers so you have to find an answer where the sum of the lengths of the two sub-arrays is minimum.<br>

Return the minimum sum of the lengths of the two required sub-arrays, or return -1 if you cannot find such two sub-arrays.<br>

Example 1:<br>
Input: arr = [3,2,2,4,3], target = 3<br>
Output: 2<br>
Explanation: Only two sub-arrays have sum = 3 ([3] and [3]). The sum of their lengths is 2.<br>

Example 2:<br>
Input: arr = [7,3,4,7], target = 7<br>
Output: 2<br>
Explanation: Although we have three non-overlapping sub-arrays of sum = 7 ([7], [3,4] and [7]), but we will choose the first and third sub-arrays as the sum of their lengths is 2.<br>

Example 3:<br>
Input: arr = [4,3,2,6,2,3,4], target = 6<br>
Output: -1<br>
Explanation: We have only one sub-array of sum = 6.<br>

Constraints:<br>

- 1 <= arr.length <= 105
- 1 <= arr[i] <= 1000
- 1 <= target <= 108

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
