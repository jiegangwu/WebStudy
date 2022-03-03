//导入模块
const http = require('http');
const fs = require('fs');
const path = require('path');

// 创建WEB 服务器
const server = http.createServer();

// 监听客户端请求
server.on('request', function (req, res) {

  const url = req.url;
  const fpath = path.join(__dirname, '../files/index.html')

  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  // 读取文件内容，响应给客户端
  if (url === '/' || url === '、index.html') {
    fs.readFile(fpath, 'utf8', (err, dataStr) => {
      if (err) {
        return res.end('<h1> 404 NOT found!!</h1>')
      } else {
        res.end(dataStr)
      }
    })
  } else if (url === '/about.html') {
    let content = `<h1>关于页面</h1>`
    res.end(content)
  }
})

// 启动服务器
server.listen(8088, () => {
  console.log("http server running at http://127.0.0.1:8088")
})