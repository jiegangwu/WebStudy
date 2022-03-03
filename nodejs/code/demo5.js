// path 模块demo

const path = require('path')

// PATH.JOIN
// " ../" 可以会退到上一次目录， “ ./“ 不可以

console.log(path.join('src', 'task.js')); //  src\task.js

console.log(path.join('/a', '/b/c', '../', './d', 'e')); // \a\b\d\e

console.log(path.join(__dirname, '../files/成绩.txt')); // C:\MyFile\Program\WebStudy\nodejs\files\成绩.txt
console.log("=========")

// path.basename
// 接收两个参数，一个是path,还有一个是ext（可选参数,可以移除文件扩展名）

console.log(path.basename('C:\\MyFile\\Program\\WebStudy\\nodejs\\files\\成绩.txt'));
console.log(path.basename('C:\\MyFile\\Program\\WebStudy\\nodejs\\files\\成绩.txt', '.txt'));
console.log("=========")

// path.extname
// 这个就是展示文件的扩展名，我们得注意几种情况
// 从最后一个 '.' 返回路径的扩展名到路径最后部分的字符串结尾。
// 如果没有'.'在路径的最后部分或它的第一个字符是'.'，然后它返回一个空字符串

console.log(path.extname('index.html'));
console.log(path.extname('index.coffee.md'));
console.log(path.extname('index.'));
console.log(path.extname('index')); //空字符串
console.log(path.extname('.index'));  //空字符串
console.log("=========")

