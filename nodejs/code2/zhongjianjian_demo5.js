// 同时使用多个局部中间件 demo

const express = require('express');

const app = express();
const port = 8088;


// 定义中间件
const mw1 = function (req, res, next) {
  console.log("第1个中间件");
  // 把流转关系转发给下一个 中间件或者路由
  next();
}
const mw2 = function (req, res, next) {
  console.log("第2个中间件");
  // 把流转关系转发给下一个 中间件或者路由
  next();
}

// 调用多个局部中间件，位置影响调用顺序
app.get('/', mw1, mw2, (req, res) => {
  console.log("调用了/ 这个路由");
  res.send("Home Page!!");
})

app.get('/user', [mw2, mw1], (req, res) => {
  console.log("调用了/user 这个路由");
  res.send("User Page!!");
})

app.listen(port, () => {
  console.log(`Example app listening on port http://127.0.0.1:${port}`);
})