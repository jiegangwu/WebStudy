// 这是文章分类的模块

const express = require('express');

const router = express.Router();

// 获取文章分类列表数据
router.get('/cates', (req, res) => {
  res.send('OK')
})


module.exports = router;