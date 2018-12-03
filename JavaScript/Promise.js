// 普通用法
function asyncFunc() {
  otherAsyncFunc1()
    .then(result => {
      console.log('----------------------------')
      console.log(result)
    })
    .catch(err => {
      // error handle ....
    })
}

// all 并行处理多个异步函数：
function asyncFuncAll() {
  Promise.all([
    otherAsyncFunc1(),
    otherAsyncFunc2()
  ]).then(result1 => {
    console.log('----------------------------')
    console.log('Promise.all end ...')
    console.log(result1)
  }).catch(error => {
    // error handle ....
  })
}

// race 获取多个异步函数最快的
function asyncFuncRace() {
  Promise.race([
    otherAsyncFunc1(),
    otherAsyncFunc2()
  ]).then(result => {
    console.log('----------------------------')
    console.log('Promise.rece end ...')
    console.log(result)
  }).catch(error => {
    // error handle ....
  })
}

asyncFunc()

asyncFuncAll()

asyncFuncRace()

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

