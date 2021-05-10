/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) {
      return '';
    }
    let result = '';
    let forLength = strs[0].length;
    for (var i=0; i<forLength; i++) {
        if (strs[i] && strs[i].length < forLength) {
          forLength = strs[i].length
        }
        var flag = query(strs[0].charAt(i), i, strs);
        if (!flag) {
          break;
        } else {
          result += strs[0].charAt(i);
        }
    }
    return result;
};
function query(char, index, arr) {
  let res = true;
  for (var i=0; i<arr.length; i++) {
      if (arr[i].charAt(index) !== char) {
        res = false;
        break;
      }
  }
  return res;
}
// @lc code=end

