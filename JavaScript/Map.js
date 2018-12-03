/**
 * Map 对象是 ES6 中的语法，它与 Object 对象最大的区别就是 Object 对象的键只能是字符串，而 Map 对象的键可以是任意值。
 * @type {Map}
 */



const obj = new Map([
  [1, '学神'],
  [2, '学霸'],
  [3, '学渣'],
  [0, '学灰']
])

// 返回一个函数，它创建了实例的原型。默认是Map函数。
console.log(obj.constructor)
// 获取键值对的数量
console.log(obj.size)
// 返回一个新的 Iterator 对象，它按插入顺序包含了Map对象中每个元素的 [key, value] 数组。
console.log(obj.entries())
// 返回键对应的值，如果不存在，则返回undefined。
console.log(obj.get(2))
// 返回一个布尔值，表示Map实例是否包含键对应的值。
console.log(obj.has(3))
// 它按插入顺序包含了Map对象中每个元素的键
console.log(obj.keys())
// 它按插入顺序包含了Map对象中每个元素的值
console.log(obj.values())
// 设置Map对象中键的值。返回该Map对象。
console.log(obj.set(0, 'set学灰'))
// 移除 返回布尔值
console.log(obj.delete(0))
// 移除Map对象的所有键值对
console.log(obj.clear())