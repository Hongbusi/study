Function.prototype._call = function(thisArg, ...args) {
  // 1. 获取要执行的函数
  const fn = this

  // 2. 处理绑定的 thisArg
  thisArg = thisArg ? Object(thisArg) : window

  // 3. 执行函数
  thisArg.fn = fn
  const result = thisArg.fn(...args)
  delete thisArg.fn

  // 4. 返回结果
  return result
}

function foo() {
  console.log('foo', this)
}

function sum(num1, num2) {
  console.log('sum', this, num1, num2)
  return num1 + num2
}
foo._call(null)
foo._call({ name: 'hbs' })
console.log(sum._call(null, 20, 40))
