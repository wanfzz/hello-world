/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for (let i=1; i<nums.length;i++) {
       let item = nums[i];
       let prev = nums[i-1];
       if (item === prev) {
         nums.splice(i, 1);
         i--;
       }
    }
    console.log(nums)
};
// @lc code=end

