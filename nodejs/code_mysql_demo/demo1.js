// 导入 mysql 模块
const mysql = require('mysql2');

// 建立与 mysql 数据库的连接关系
const db = mysql.createPool({
  host: 'localhost', // 数据库地址
  port: 3306,  // 端口
  user: 'root',  // 数据库用户名
  password: '123456',  // 数据库密码
  database: 'my_db_01' // 连接目标数据库
});

// 检测数据库是否连接成功
/*
db.query('select * from users',(err,results)=>{
  if (err) {
    console.log(err.message)
  } else {
    console.log(results)
  }
})*/
// select 查询语句得到的是一个数组
// const sqlStr = 'select * from users';

// db.query(sqlStr,(err,results)=>{
//   // 执行失败
//   if (err) {
//     return console.log(err.message)
//   } else {
//     // 执行成功
//     console.log(results)
//   }
// })

// 插入数据
/*
const user = {username: 'Spider_Man1', password: '123456'};

const sqlStr2 = 'insert into users (username,password) values (?,?)';

db.query(sqlStr2,[user.username,user.password],(err,results)=> {
  if (err) {
    return console.log(err.message)
  }
  if (results.affectedRows === 1) {
    console.log('插入成功！！')
  }
});*/

// 插入数据的便捷方式
/*const user = {username: 'Spider_Man5', password: '123456'};

const sqlStr2 = 'insert into users SET ?';

db.query(sqlStr2,user,(err,results)=> {
  if (err) {
    return console.log(err.message)
  }
  if (results.affectedRows === 1) {
    console.log('插入成功！！')
  }
});*/

// 更新数据

const user = {id: 9, username: 'xiaoming', password: '654321'};

const sqlStr = 'update users set username=?,password=? where id=?';

db.query(sqlStr, [user.username, user.password, user.id], (err, results) => {
  if (err) {
    return console.log(err.message)
  }
  if (results.affectedRows === 1) {
    console.log('更新成功！！')
  }
})
