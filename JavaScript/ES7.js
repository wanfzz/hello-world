// includes() 方法用来判断一个数组是否包含一个指定的值 返回布尔值
const arr = ['cat', 'dog', 'bat'];
console.log(arr.includes('at'), arr.includes('dog'))

const obj = { 'key1': 'val1', 'key2': 'val2' };
// Object.values() 方法返回一个给定对象自己的所有可枚举属性值的数组
console.log(Object.values(obj))
// Object.keys() 方法返回一个给定对象自己的所有可枚举key的数组
console.log(Object.keys(obj))
// Object.entries 方法返回一个给定对象自身可遍历属性 [key, value] 的数组
console.log(Object.entries(obj))
