const express = require('express');
const router = require('./express_routerdemo1');

const app = express();
const port = 8088;

// 注册路由模块
app.use(router);

// 添加统一的访问前缀
// app.use('/api',router);

app.listen(port, () => {
  console.log(`Example app listening on port http://127.0.0.1:${port}`)
})