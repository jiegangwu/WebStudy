/*
*
* 根据请求地址不同，返回不同内容
* 1、获取请求的 URL 地址，
* 2、设置默认的响应内容，404
* 3、判断用户的请求是否为/ 或者 /index.html 首页
* 4、判断用户的请求是否为/about.html 页面
* 5、设置Content-Type 响应头，防止中文乱码
* 6、使用 res.end 把内容响应给客户端
*
* */

const http = require('http');

const server = http.createServer();

server.on('request', function (req, res) {
  const url = req.url;
  let content = `<h1> 404 NOT found!!</h1>`
  if (url === '/' || url === '、index.html') {
    content = `<h1>首页</h1>`
  } else if (url === '/about.html') {
    content = `<h1>关于页面</h1>`
  }

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end(content);
})

server.listen(8088, () => {
  console.log("http server running at http://127.0.0.1:8088")
})