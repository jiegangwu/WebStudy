// 导入fs模块，来操作文件
const fs = require('fs')

//调用 fs.readfile() 方法读取文件
//  参数1 ：读取文件的路径
// 参数2 ： 读取文件的时候的编码格式 utf-8
//  参数3： 回调函数，拿到读取失败和成功的结果，err ， dataStr

fs.readFile('../files/test1.txt', 'utf8', function (err, dataStr) {
  if (err) {
    return console.log('文件读取失败！！' + '\n' + err.message)
  } else {
    return console.log('文件读取成功!!' + '\n' + dataStr)
  }
  /*  // 打印失败的内容
    console.log(err);
    console.log('-------');
  // 打印成功的内容
    console.log(dataStr);*/

  // 读取成功， 则err 的值为 null
//  读去失败，在err 的值为错误对象，dataStr 的值为undefined
})
