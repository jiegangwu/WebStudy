// 导入数据库包
const db = require('../db/index');
// 导入加密包
const bcrypt = require('bcryptjs');
// token 包
const jwt = require('jsonwebtoken');
// 全局变量
const config = require('../config');

// 注册用户的处理函数
exports.regUser = (req, res) => {
  // 获取客户端提交到服务器的用户信息
  const userinfo = req.body;
  // console.log(userinfo);
  // 对表单中的数据，进行合法性校验
  /*  if (!userinfo.username || !userinfo.password) {
      /!*return res.send({
        status: 1,
        msg: '用户名或者密码不能为空'
      })*!/
      return res.cc('用户名或者密码不能为空')
    }*/
  // 定义查询语句，查询用户名是否被占用
  const sqlStr = 'select * from ev_users where username=?'
  db.query(sqlStr, userinfo.username, (err, results) => {
    // 执行查询失败
    if (err) {
      /*return res.send({
        status: 1,
        msg: err.message
      })*/
      return res.cc(err)
    }

    // 用户名被占用
    if (results.length > 0) {
      /*return res.send({
        status: 1,
        msg: '用户名被占用，请更换用户名！！'
      })*/
      return res.cc('用户名被占用，请更换用户名！！')
    }

    // DO: 用户名可用，继续后续流程...
    // 对用户的密码,进行 bcrype 加密，返回值是加密之后的密码字符串
    userinfo.password = bcrypt.hashSync(userinfo.password, 10)
    // console.log(userinfo);
    // 定义插入新用户的SQL 语句
    const intoSqlStr = 'insert into ev_users set ?';
    // 执行插入
    db.query(intoSqlStr, {username: userinfo.username, password: userinfo.password}, (err, results) => {
      // 判断SQL 插入是否成功
      if (err) {
        /*return res.send({
          status:1,
          msg:err.message,
        })*/
        return res.cc(err)
      }
      // 判断影响行数是否为1
      if (results.affectedRows !== 1) {
        /*return res.send({
          status:1,
          msg:'用户注册失败，请重试'
        })*/
        return res.cc('用户注册失败，请重试')
      }
      // 注册成功
      /*res.send({
        status: 0,
        msg: '注册成功！！'
      })*/
      res.cc('注册成功！！', 0)
    })
  })
}

// 登录的处理函数
exports.login = (req, res) => {
  // 接收表单的数据
  const userinfo = req.body;

  // 定义用户名查询语句
  const querySqlStr = 'select * from ev_users where username=?';

  // 执行查询语句，根据用户名查找用户信息
  db.query(querySqlStr, [userinfo.username], (err, results) => {
    // console.log(results)
    // 执行 SQL 语句失败
    if (err) {
      return res.cc(err)
    }
    // 执行 SQL 语句成功，但是查询到数据条数不等于 1，即没有找到用户
    if (results.length !== 1) {
      return res.cc('登陆失败！！')
    }
    // TODO：判断用户输入的登录密码是否和数据库中的密码一致
    // 拿着用户输入的密码,和数据库中存储的密码进行对比
    const compareResult = bcrypt.compareSync(userinfo.password, results[0].password)

    // 如果对比的结果等于 false, 则证明用户输入的密码错误
    if (!compareResult) {
      return res.cc('登录失败！')
    }

    // TODO：登录成功，生成 Token 字符串
    // 剔除完毕之后，user 中只保留了用户的 id, username, nickname, email 这四个属性的值
    const user = {...results[0], password: '', user_pic: ''}
    // 对用户的信息进行， 生成token 字符串
    const tokenStr = jwt.sign(user, config.jwtSecretKey, {expiresIn: config.expiresIn});
    // 调用res.send将token相应给客户端
    res.send({
      status: 0,
      msg: '登陆成功！！',
      token: 'Bearer ' + tokenStr,
    })
    // res.send('login OK')
  })
}