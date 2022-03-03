// 创建web 服务器
/*
* 1.导入http 模块
* 2、创建WEB 实例
* 3、 为服务器实例绑定request 事件，监听客户端的请求
* */

const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  console.log("SomeOne visit our web server!!")
  const url = req.url;
  const method = req.method;
  const str = `您请求的地址是 ${url}, 请求的类型是 ${method}`;
  console.log(str);
  //解决中文乱码
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  // 调用 res.end 方法，向客户端响应一些内容
  res.end(str);
});

server.listen(8088, () => {
  console.log("http server running at http://127.0.0.1:8088")
});