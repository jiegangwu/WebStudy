// 打印当前文件所处的路径
console.log(__dirname)

// 整理成绩练习

const fs = require('fs')

fs.readFile(__dirname + '../files/成绩.txt', 'utf8', function (err, dataStr) {
  if (err) {
    return console.log("读取错误！！" + err.message)
  } else {
    // return console.log('读取成功！！'+'\n'+dataStr)
    // 先把成绩的数据按照空格进行分割， 循环分割后的数组，对每一项数据，进行数据替换操作

    let arrOld = dataStr.split(' ');
    console.log(arrOld);
    let arrNew = [];
    arrOld.forEach(item => {
      arrNew.push(item.replace('=', ': '))
    });

    // 把新数组中的每一项，进行合并，得到一个新的字符创
    const newStr = arrNew.join('\r\n');
    console.log(newStr);

    // 把数据写入新文件new.txt

    fs.writeFile('../files/new.txt', newStr, function (err) {
      if (err) {
        return console.log("写入失败！！" + err.message)
      } else {
        return console.log('写入成功！！')
      }
    })
  }
})