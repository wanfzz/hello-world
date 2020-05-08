/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let map = new Map();
  for (var i=0; i< nums.length;i++) {
    var temp = target - nums[i];
    if (map.has(temp)) {
        return [map.get(temp), i]
    }
    map.set(nums[i], i);
  }
  return [-1, -1];
};
// @lc code=end

