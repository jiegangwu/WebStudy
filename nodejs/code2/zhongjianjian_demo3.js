// 定义多个中间件

const express = require('express');

const app = express();
const port = 8088;

// 中间件定义
app.use(function (req, res, next) {

  console.log("第 1 个全局中间件");
  // 把流转关系转发给下一个 中间件或者路由
  next();
})

app.use(function (req, res, next) {
  console.log("第 2 个全局中间件");
  // 把流转关系转发给下一个 中间件或者路由
  next();
})

app.use(function (req, res, next) {
  console.log("第 3 个全局中间件");
  // 把流转关系转发给下一个 中间件或者路由
  next();
})


app.get('/', (req, response) => {

  response.send("Home Page!!");
})

app.get('/user', (req, response) => {

  response.send("User Page!!");
})

app.listen(port, () => {
  console.log(`Example app listening on port http://127.0.0.1:${port}`);
})