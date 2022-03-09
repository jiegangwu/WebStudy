const express = require('express');
const cors = require('cors');
const userRouter = require('./router/user');
const joi = require('joi');
const expressJWT = require('express-jwt');
const config = require('./config');
const userinfoRouter = require('./router/userinfo');
const artCateRouter = require('./router/artcate');

const app = express();
const port = 8088;

app.use(cors());
// 配置表单数据的中间件
app.use(express.urlencoded({extended: false}));

// 在路由之前封装 错误处理中间件
app.use((req, res, next) => {
  // status 默认值为1，显示失败情况
  // err 的值可能是一个对象也可能是一个对错误描述的字符串信息
  res.cc = function (err, status = 1) {
    res.send({
      status,
      msg: err instanceof Error ? err.message : err,
    })
  }
  next();
})

// // 使用 .unless({ path: [/^\/api\//] }) 指定哪些接口不需要进行 Token 的身份认证
app.use(expressJWT({secret: config.jwtSecretKey}).unless({path: [/^\/api/]}))

// 注册用户路由模块
app.use('/api', userRouter);
// 查询用户信息路由
app.use('/my', userinfoRouter);
// 文章分类路由模块
app.use('/my/article', artCateRouter);


// 定义错误级别的中间件
app.use((err, req, res, next) => {
  if (err instanceof joi.ValidationError) {
    return res.cc(err)
  }
  // console.log(err.name)
  if (err.name === 'UnauthorizedError') {
    return res.cc('身份认证失败！！！')
  }
  // 未知的错误
  res.cc(err)

})


app.listen(port, () => {
  console.log(`Example app listening on port http://127.0.0.1:${port}`);
})