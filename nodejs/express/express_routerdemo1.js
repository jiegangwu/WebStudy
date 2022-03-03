// 路由模块demo
// 1、导入express
const express = require('express');
// 创建路由对象
const router = express.Router();

// 3、挂载具体路由
router.get('/user/list', (req, res) => {
  res.send('Get usr list')
})

router.post('/user/add', (req, res) => {
  res.send('Add new User')
})

// 4.向外导出路由对象
module.exports = router
