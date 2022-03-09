const mysql = require('mysql2');

const db = mysql.createPool({
  host: 'localhost', // 数据库地址
  port: 3306,  // 端口
  user: 'root',  // 数据库用户名
  password: '123456',  // 数据库密码
  database: 'my_db_01' // 连接目标数据库
});

// 向外共享 db 数据库连接对象
module.exports = db