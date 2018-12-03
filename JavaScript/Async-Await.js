
// 普通用法
async function asyncFunc() {
  try {
    let result = await otherAsyncFunc1();
    console.log(result);
  } catch (error) {
    // error handle ....
  }
}

// all 并行处理多个异步函数：
async function asyncFuncAll() {
  try {
    const [result1, result2] = await Promise.all([
      otherAsyncFunc1(),
      otherAsyncFunc2()
    ])
  } catch (error) {
    // error handle ....
  }
  console.log(result1, result2);
}

asyncFunc()

asyncFuncAll()

function otherAsyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('1000ms otherAsyncFunc1 end...')
    }, 1000)
  })
}

function otherAsyncFunc2() {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve('2000ms otherAsyncFunc2 end...')
    }, 2000)
  })
}