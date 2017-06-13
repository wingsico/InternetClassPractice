// // 假定裁判的打分
// var scores = [89, 88, 98, 76, 83, 93, 92, 86, 95, 90]

// var min = scores[0]
// var max = scores[0]

// var minIndex = 0
// var maxIndex = 0

// var sum = 0
// for( var i = 0, len = scores.length; i < len; i++){
//   if( scores[i] < min){
//     minIndex = i
//     min = scores[i]
//   }

//   if( scores[i] > max){
//     maxIndex = i
//     max = scores[i]
//   }
// }

// for(var j = 0; j < len; j++){
//   if( scores[j] !== max && scores[j] !== min){
//     sum += scores[j]
//   }
// }
// console.log(
//   '每个评委的分数为:' + scores.join(',')
// )

// console.log(
//   '去掉最高分:' + max + ",去掉最低分:" + min + ',最后得分:' + sum / (len-2)
// )



var counts = 50  // 生成50个
var countsArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] // 储存0~9分别出现的次数
var minIndex = [0]  // 储存出现次数最少的数字
var maxIndex = [0]  // 储存出现次数最多的数字
var maxStr = ''   // 储存出现最多数字组成的字符串（因为可能有多个数字次数均为最大）
var minStr = ''   // 储存出现最少数字组成的字符串（因为可能有多个数字次数均为最小）

// 生成随机数
for (var i = 0; i < counts; i++) {
  var randomNum = parseInt(Math.random() * 10, 10)
  countsArr[randomNum]++
}

// 找出一个次数最多 和一个次数最少 所对应的数字
for (var j = 0; j < countsArr.length; j++) {
  if(countsArr[minIndex[0]] > countsArr[j]){
    minIndex[0] = j
  }
  if(countsArr[maxIndex[0]] < countsArr[j]){
    maxIndex[0] = j
  }
}

// 找出是否有与出现最多/少的数字出现次数相同的数字
for(var n = 0; n < countsArr.length; n++){
  if(countsArr[minIndex[0]] === countsArr[n] && minIndex[0] !== n){
    minIndex.push(n)
  }
  if(countsArr[maxIndex[0]] === countsArr[n] && maxIndex[0] !== n){
    maxIndex.push(n)
  }
}

console.log(countsArr)

// 拼接出现次数最少组成的字符串和出现次数最多数字组成的字符串
// 例如 1,5 均出现最多次为9次， 那么得到的 maxStr 就为 1,5
for(var i = 0; i < minIndex.length; i++){
  minStr += minIndex[i] + ','
}

for(var j = 0; j < maxIndex.length; j++){
  maxStr += maxIndex[j] + ','
}

// 输出结果
console.log(
  '出现最多的数字为:' + maxStr + '出现的次数为:' + countsArr[maxIndex[0]] + ',出现的频率为:' + countsArr[maxIndex[0]] / 50
)

console.log(
  '出现最少的数字为:' + minStr + '出现的次数为:' + countsArr[minIndex[0]] + ',出现的频率为:' + countsArr[minIndex[0]] / 50
)