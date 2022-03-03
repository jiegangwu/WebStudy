// 拆分 html 文件

const fs = require('fs');
const path = require('path');

// 匹配style 标签正则
//  \s 表示空白字符； \S 表示非空白字符  * 表示任意内容
const regStyle = /<style>[\s\S]*<\/style>/

// 匹配script 标签正则
const regScript = /<script>[\s\S]*<\/script>/

// 读取index.html 文件
fs.readFile(path.join(__dirname, '../files/index.html'), 'utf8', function (err, dataStr) {
  if (err) {
    console.log('读取文件失败' + err.message)
  } else {
    console.log("读取成功！！");
    // 拆解文件到三个不同文件
    resolveCSS(dataStr);
    resolveJS(dataStr);
    resolveHtml(dataStr);
    console.log("处理完成！！")
  }
})

// 提取CSS
function resolveCSS(htmlStr) {
  // 使用正则提取CSS
  const r1 = regStyle.exec(htmlStr);
  // 处理提取的字符串
  const newCss = r1[0].replace('<style>', '').replace('</style>', '')
  // 将字符串写入 index.css 文件中
  fs.writeFile(path.join(__dirname, '../files/index.css'), newCss, err => {
    if (err) {
      return console.log("写入失败！！" + err.message)
    } else {
      console.log("CSS 样式写入成功！！")
    }
  })
}

// 提取js
function resolveJS(htmlStr) {
  // 使用正则提取CSS
  const r1 = regScript.exec(htmlStr);
  // 处理提取的字符串
  const newJs = r1[0].replace('<script>', '').replace('</script>', '')
  // 将字符串写入 index.css 文件中
  fs.writeFile(path.join(__dirname, '../files/index.js'), newJs, err => {
    if (err) {
      return console.log("写入失败！！" + err.message)
    } else {
      console.log("Js 样式写入成功！！")
    }
  })
}

// 处理html
function resolveHtml(htmlStr) {
  const newHtml = htmlStr.replace(regStyle, '<link rel = "stylesheet" href="../files/index.css"/>')
    .replace(regScript, '<script src="../files/index.js"></script>')
  // 将字符串写入 index.css 文件中
  fs.writeFile(path.join(__dirname, '../files/newindex.html'), newHtml, err => {
    if (err) {
      return console.log("写入失败！！" + err.message)
    } else {
      console.log("html 样式写入成功！！")
    }
  })
}