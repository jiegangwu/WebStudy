const express = require('express');

const app = express();
const port = 8088;

// 中间件定义
app.use(function (req, res, next) {
  // 获取到请求到达服务器的时间
  const time = Date.now();

  // 挂在自定义属性time 到 req 上，形成属性分享，供其他路由使用
  req.startTime = time;
  // 把流转关系转发给下一个 中间件或者路由
  next();
})

app.get('/', (req, response) => {

  response.send("Home Page!!" + req.startTime);
})

app.get('/user', (req, response) => {

  response.send("User Page!!" + req.startTime);
})

app.listen(port, () => {
  console.log(`Example app listening on port http://127.0.0.1:${port}`);
})