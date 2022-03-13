// 这是文章分类的模块

const express = require('express');
const artcate_handle = require('../router_handler/artcate');
const expressJoi = require('@escook/express-joi');
const {
  add_cate_schema,
  delete_cate_schema,
  get_cate_schema,
  update_cate_schema,
  add_article_schema
} = require("../schema/artcate");
const multer = require('multer');
const path = require('path');


const router = express.Router();

// 创建 multer 的实例对象，通过 dest 属性指定文件的存放路径
const upload = multer({dest: path.join(__dirname, '../uploads')});


// 获取文章分类列表数据
router.get('/cates', artcate_handle.getArtCates);

// 增加文章分类
router.post('/addcates', expressJoi(add_cate_schema), artcate_handle.addArticleCates);

//删除文章分类
router.post('/deletecate/:id', expressJoi(delete_cate_schema), artcate_handle.deleteCateById)

//  根据 Id 获取文章分类数据
router.get('/cates/:id', expressJoi(get_cate_schema), artcate_handle.getArtCateById);

// 更新文章分类的路由
router.post('/updatecate', expressJoi(update_cate_schema), artcate_handle.updateCateById);

module.exports = router;