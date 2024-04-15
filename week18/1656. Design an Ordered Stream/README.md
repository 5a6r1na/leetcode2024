## 1656. Design an Ordered Stream

📎 Link: [Design an Ordered Stream](https://leetcode.com/problems/design-an-ordered-stream/description/)<br>
🟢 Difficulty: Easy<br>
👩🏻‍💻 Topics: Array, Hash Table, Design, Data Stream<br>

=======================================================================================<br>
There is a stream of n (idKey, value) pairs arriving in an arbitrary order, where idKey is an integer between 1 and n and value is a string. No two pairs have the same id.<br>

Design a stream that returns the values in increasing order of their IDs by returning a chunk (list) of values after each insertion. The concatenation of all the chunks should result in a list of the sorted values.<br>

Implement the OrderedStream class:<br>

- OrderedStream(int n) Constructs the stream to take n values.
- String[] insert(int idKey, String value) Inserts the pair (idKey, value) into the stream, then returns the largest possible chunk of currently inserted values that appear next in the order.

<br>
Example 1:<br>
Input<br>
["OrderedStream", "insert", "insert", "insert", "insert", "insert"]<br>
[[5], [3, "ccccc"], [1, "aaaaa"], [2, "bbbbb"], [5, "eeeee"], [4, "ddddd"]]<br>
Output<br>
[null, [], ["aaaaa"], ["bbbbb", "ccccc"], [], ["ddddd", "eeeee"]]

Explanation<br>
// Note that the values ordered by ID is ["aaaaa", "bbbbb", "ccccc", "ddddd", "eeeee"].<br>
OrderedStream os = new OrderedStream(5);<br>
os.insert(3, "ccccc"); // Inserts (3, "ccccc"), returns [].<br>
os.insert(1, "aaaaa"); // Inserts (1, "aaaaa"), returns ["aaaaa"].<br>
os.insert(2, "bbbbb"); // Inserts (2, "bbbbb"), returns ["bbbbb", "ccccc"].<br>
os.insert(5, "eeeee"); // Inserts (5, "eeeee"), returns [].<br>
os.insert(4, "ddddd"); // Inserts (4, "ddddd"), returns ["ddddd", "eeeee"].<br>
// Concatentating all the chunks returned:<br>
// [] + ["aaaaa"] + ["bbbbb", "ccccc"] + [] + ["ddddd", "eeeee"] = ["aaaaa", "bbbbb", "ccccc", "ddddd", "eeeee"]<br>
// The resulting order is the same as the order above.<br>

Constraints:<br>

- 1 <= n <= 1000
- 1 <= id <= n
- value.length == 5
- value consists only of lowercase letters.
- Each call to insert will have a unique id.
- Exactly n calls will be made to insert.

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
