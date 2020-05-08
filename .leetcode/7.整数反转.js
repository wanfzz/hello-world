/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let temp = String(x).split('').reverse();
    let result = parseInt(temp.join(''));
    if (result > Math.pow(2, 31)) {
      return 0;
    }
    return x > 0 ? result :-result;
};
// @lc code=end

