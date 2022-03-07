const express = require('express');
const router = express.Router();

// 挂载对应的路由
router.get('/get', (req, res) => {
  // 通过 res.query 获取发送到服务端的数据
  const query = req.query;
  // 向客户端发送数据相应处理结果
  res.send({
    status: 0, //0 表示处理成功， 1 表示处理失败
    msg: 'GET 请求成功！！',  // 状态描述
    data: query, // 需要相应给客户端的数据
  })
})

router.post('/post', (req, res) => {
  // 通过 res.query 获取发送到服务端的数据
  const body = req.body;
  // 向客户端发送数据相应处理结果
  res.send({
    status: 0, //0 表示处理成功， 1 表示处理失败
    msg: 'POST 请求成功！！',  // 状态描述
    data: body, // 需要相应给客户端的数据
  })
})
router.delete('/delete', (req, res) => {

  // 向客户端发送数据相应处理结果
  res.send({
    status: 0, //0 表示处理成功， 1 表示处理失败
    msg: 'DELETE 请求成功！！',  // 状态描述
  })
})

module.exports = router