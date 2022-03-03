// 文件写入DEMO

const fs = require('fs')

// fs.writeFile
// 参数1 ： 必选参数 ， 指定需要写入的文件的存放路径，
// 参数2： 必选参数， 表示要写入的内容
// 参数3： 可选参数， 表示以什么格式写入文件内容，默认为UTF-8
// 参数4： 必选参数，文件写入完成后的回调函数

fs.writeFile('../files/test2.txt', "Hello World!!!", function (err) {
  if (err) {
    // 如果文件写入失败，则err 等于一个 错误对象
    return console.log("写入失败！！" + err.message)
  } else {
    // 如果文件写入成功，则err 等于null
    return console.log("写入成功")
  }
})