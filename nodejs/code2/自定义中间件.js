const express = require('express');
const qs = require('querystring');
const app = express();
const port = 8088;

app.use((req, res, next) => {
  // 定义一个str 字符串，专门用来存储客户端发送过来的请求体数据
  let str = '';
  // 监听req 的 data 事件
  req.on('data', chunk => {
    str += chunk;
  })
  // 监听req 的 end 事件
  req.on('end', () => {
    // 在 str 中存放的完整的请求体数据
    console.log(str);
    // TODO: 把字符串格式的请求体数据，解析成对象格式
    const body = qs.parse(str);
    console.log(body)
  })
})

app.post('/user', (req, res) => {
  res.send('OK')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://127.0.0.1:${port}`);
})