/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 * Using a hashmap allows time complexity improve from O(N) to O(1)
 */
var twoSum = function (nums, target) {
    // [STEP]: Initialize hashmap
    let hashmap = {};

    // [STEP]: Iterate through array
    for (let i = 0; i<nums.length; i++){
        // [STEP]: Calculate complement
        let complement = target - nums[i];

        // [CASE]: If complement is found in hashmap, return index
        if (hashmap[complement] !== undefined){
            return [hashmap[complement], i]
        }

        // [CASE]: If complement NOT found, store the current number and index in hashmap
        hashmap[nums[i]] = i;
    }

    return [];
  };
  