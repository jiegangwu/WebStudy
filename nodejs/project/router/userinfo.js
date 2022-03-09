const express = require('express');
const userInfo_handler = require('../router_handler/userinfo');
// 验证数据中间件
const expressJoi = require('@escook/express-joi');
const {update_userinfo_schema, update_password_schema, update_avatar_schema} = require("../schema/user");


const router = express.Router();
// 挂载路由
/*router.get('/userinfo',(req,res)=>{
  res.send('ok')
})*/
// 获取用户信息路由
router.get('/userinfo', userInfo_handler.getUserInfo);

// 更新用户信息路由
router.post('/userinfo', expressJoi(update_userinfo_schema), userInfo_handler.updateUserInfo)

// 重置密码的路由
router.post('/updatepwd', expressJoi(update_password_schema), userInfo_handler.updatePassWord)

// 更新用户头像的路由
router.post('/update/avatar', expressJoi(update_avatar_schema), userInfo_handler.updateAvatar)


module.exports = router;