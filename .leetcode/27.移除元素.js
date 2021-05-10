/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for (var i=0; i<nums.length; i++) {
      let num = nums[i];
      if (num === val) {
        nums.splice(i, 1) && i--;
      }
    }
    return nums.length;
};
// @lc code=end

