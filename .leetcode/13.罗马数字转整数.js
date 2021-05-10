/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  // MCMXCIV
  let result = 0;
  let map = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
  ])
  for (var i=0; i<s.length; ++i) {
    let currentKey = s[i];
    let nextKey = s[i+1];
    if (map.get(currentKey) < map.get(nextKey) ) {
      result -= map.get(currentKey)
    } else {
      result += map.get(currentKey)
    }
    console.log(currentKey, nextKey, i, result)
  }
  return result;
};
// @lc code=end

