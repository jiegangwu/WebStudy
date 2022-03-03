const express = require('express');

const app = express();
const port = 8088;

/*
// 定义中间件
const mw = function (req,res,next){
  console.log("这是最简单的中间件");
  // 把流转关系转发给下一个 中间件或者路由
  next();
}
// 将mw 注册为全局生效的中间件
app.use(mw);
*/

// 整合上面2步
app.use(function (require, response, next) {
  console.log("这是最简单的中间件");
  // 把流转关系转发给下一个 中间件或者路由
  next();
})

app.get('/', (req, response) => {
  console.log("调用了/ 这个路由");
  response.send("Home Page!!");
})

app.get('/user', (req, response) => {
  console.log("调用了/user 这个路由");
  response.send("User Page!!");
})

app.listen(port, () => {
  console.log(`Example app listening on port http://127.0.0.1:${port}`);
})