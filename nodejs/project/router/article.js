// 导入 express
const express = require('express');
// 导入解析 formdata 格式表单数据的包
const multer = require('multer');
// 导入处理路径的核心模块
const path = require('path');
// 导入验证数据的中间件
const expressJoi = require('@escook/express-joi');
// 导入文章的验证模块
const {add_article_schema, delete_article_schema} = require('../schema/article');

// 创建 multer 的实例对象，通过 dest 属性指定文件的存放路径

const storage = multer.diskStorage({
  //设置上传后文件路径，uploads文件夹会自动创建。
  destination: function (req, file, cb) {
    // 设定存储位置
    cb(null, path.join(__dirname, '../uploads'))
  },
  // 处理文件无后缀，无法打开问题
  filename: function (req, file, cb) {
    // let appendName = file.originalname.split('.')[1];
    cb(null, file.originalname)
  },
  // encoding:'gbk',
})

const upload = multer({storage: storage})

// const upload = multer({ dest: path.join(__dirname, '../uploads') })
// 创建路由对象
const router = express.Router()
// 导入文章的路由处理函数模块
const article_handler = require('../router_handler/article')

// 发布新文章的路由
// upload.single() 是一个局部生效的中间件，用来解析 FormData 格式的表单数据
// 将文件类型的数据，解析并挂载到 req.file 属性中
// 将文本类型的数据，解析并挂载到 req.body 属性中
// 注意：在当前的路由中，先后使用了两个中间件：
//       先使用 multer 解析表单数据
//       再使用 expressJoi 对解析的表单数据进行验证
router.post('/add', upload.single('cover_img'), expressJoi(add_article_schema), article_handler.addArticle)

// 获取文章列表数据路由
router.get('/list', article_handler.getArticleById)

// 根据 Id 删除文章数据
router.post('/delete/:id', expressJoi(delete_article_schema), article_handler.deleteArticleById)
// 向外共享路由对象
module.exports = router