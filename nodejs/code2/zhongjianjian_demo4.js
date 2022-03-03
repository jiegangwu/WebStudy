// 局部中间件 demo

const express = require('express');

const app = express();
const port = 8088;


// 定义中间件
const mw = function (req, res, next) {
  console.log("这是最简单的中间件");
  // 把流转关系转发给下一个 中间件或者路由
  next();
}

// 中间件只影响/ 这个路由，不会影响/user 的路由
app.get('/', mw, (req, res) => {
  console.log("调用了/ 这个路由");
  res.send("Home Page!!");
})

app.get('/user', (req, res) => {
  console.log("调用了/user 这个路由");
  res.send("User Page!!");
})

app.listen(port, () => {
  console.log(`Example app listening on port http://127.0.0.1:${port}`);
})