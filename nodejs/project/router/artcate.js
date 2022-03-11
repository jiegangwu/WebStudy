// 这是文章分类的模块

const express = require('express');
const artcate_handle = require('../router_handler/artcate');
const expressJoi = require('@escook/express-joi');
const {add_cate_schema, delete_cate_schema, get_cate_schema} = require("../schema/artcate");

const router = express.Router();

// 获取文章分类列表数据
router.get('/cates', artcate_handle.getArtCates);

// 增加文章分类
router.post('/addcates', expressJoi(add_cate_schema), artcate_handle.addArticleCates);

//删除文章分类
router.post('/deletecate/:id', expressJoi(delete_cate_schema), artcate_handle.deleteCateById)

//  根据 Id 获取文章分类数据
router.get('/cates/:id', expressJoi(get_cate_schema), artcate_handle.getArtCateById);

// 更新文章分类的路由
router.post('/updatecate', artcate_handle.updateCateById);

module.exports = router;