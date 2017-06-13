Array.prototype.Sort = function (sortBy) { // 扩展Array原型方法, 参数为函数
  var thisArr = this // 将数组复制为一个局部变量
  var temp  // 设置中间变量
  var k // 储存最值下标
  for (var i = 0; i < thisArr.length; i++) {
    k = i
    for (var j = i + 1; j < thisArr.length; j++) {
      if (sortBy(thisArr[k], thisArr[j]) > 0) { // 调用参数函数 ,函數返回值 > 0 則執行
        k = j
      }
    }
    // 交换值
    temp = thisArr[k]
    thisArr[k] = thisArr[i]
    thisArr[i] = temp
  }
  // 返回排序后数组,注意此时原数组也改变了
  return thisArr
}

var arr = [1, 5, 3, 2, 4, 8, 8, 10, 32, 12, 22]
function ascending(a, b) {
  return a - b // a - b 则升序
}

function descending(a, b) {
  return b - a //  b - a 则降序
}
console.log(arr.Sort(ascending))
console.log(arr) // 原数组改变
console.log(arr.Sort(descending))