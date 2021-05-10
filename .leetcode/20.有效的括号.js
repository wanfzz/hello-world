/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr = [];
    let temp = s.split('');
    for (var i=0; i<temp.length;i++) {
      let symbol = temp[i];
      if (symbol === '(') {
        arr.push(')')
      } else if (symbol === '[') {
        arr.push(']')
      } else if (symbol === '{') {
        arr.push('}')
      } else if (arr.pop() !== symbol) {
        return false;
      }
    }
    return !arr.length
};
// @lc code=end

