const express = require('express');

const app = express();
const port = 8088;
const session = require('express-session');
// TODO_01：请配置 Session 中间件
app.use(session({
  secret: 'mima',
  resave: false,
  saveUninitialized: true
}));
// 托管静态页面
app.use(express.static('./pages'));
// 解析 POST 提交过来的表单数据
app.use(express.urlencoded({extended: false}))
// 登陆API 接口
app.post('/api/login', (req, res) => {
  // 判断用户登陆信息是否正确
  if (req.body.username !== 'admin' || req.body.password !== '000000') {
    return res.send({
      status: 1,
      msg: '登陆失败！！'
    })
  }
  // 将用户信息保存到session中
  // 注意只有配置了express-session 这个中间件，才能在req 中调用到
  req.session.user = req.body;    // 用户信息
  req.session.isLogin = true; // 用户的登陆状态

  res.send({
    status: 0,
    msg: '登陆成功！！'
  })
})

// 获取用户姓名接口
app.get('/api/username', (req, res) => {
  //TODO 从session 中获取用户用户名称，响应给客户端
  // 判断用户是否登陆
  if (!req.session.isLogin) {
    return res.send({
      status: 1,
      msg: '用户未登陆！'
    })
  } else {
    res.send({
      status: 0,
      msg: '成功！！',
      username: req.session.user.username,
    })
  }
})

// 用户退出登陆
app.post('/api/logout', (req, res) => {
  //TODO  清空session 信息
  req.session.destroy();
  res.send({
    status: 0,
    msg: '退出登陆成功！！'
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port http://127.0.0.1:${port}`);
})