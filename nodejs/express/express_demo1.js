// 导入express模块
const express = require('express');
// 创建 WEB 服务器
const app = express();
// 创建WEB 服务器服务端口
const port = 8088;

app.get('/', (req, res) => {
  // res.send('Hello World!')
  // 获取客户端发送的查询参数
  console.log(req.query);
  res.send(req.query)

})
app.get('/user', (req, res) => {
  res.send({
    name: 'admin',
    age: 18
  })
})
// :id 是一个动态参数
app.get('/user/:id', (req, res) => {
  //req.params 默认是一个空对象
  console.log(req.params)
  res.send(req.params)
})
app.post('/', (req, res) => {
  res.send('post请求成功！！')
})
// 启动WEB 服务器
app.listen(port, () => {
  console.log(`Example app listening on port http://127.0.0.1:${port}`)
})

/*
app.listen(8088,()=>{
  console.log("Express Web Server Running on http://127.0.0.1:8088")
})*/
