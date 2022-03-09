// 导入数据库操作模块
const db = require('../db/index');

// 获取文章分类列表数据的处理函数
exports.getArtCates = (req, res) => {
  // 根据分类的状态，获取所有未被删除的分类列表数据
// is_delete 为 0 表示没有被 标记为删除 的数据
  const sql = 'select * from ev_article_cate where is_delete=0 order by id asc';

  db.query(sql, (err, results) => {
    // 1. 执行 SQL 语句失败
    if (err) return res.cc(err)

    // 2. 执行 SQL 语句成功
    res.send({
      status: 0,
      message: '获取文章分类列表成功！',
      data: results,
    })
  })
}

// 增加文章分类处理函数
exports.addArticleCates = (req, res) => {
  // 定义查询 分类名称 与 分类别名 是否被占用的 SQL 语句
  const sql = `select * from ev_article_cate where name=? or alias=?`;
  // 执行查重操作
  db.query(sql, [req.body.name, req.body.alias], (err, results) => {
    // 执行 SQL 语句失败
    if (err) return res.cc(err)

    // 分类名称 和 分类别名 都被占用
    if (results.length === 2) {
      return res.cc('分类名称与别名被占用，请更换后重试！')
    }

    if (results.length === 1 && results[0].name === req.body.name && results[0].alias === req.body.alias) {
      return res.cc('分类名称与别名被占用，请更换后重试！')
    }

    // 分类名称 或 分类别名 被占用
    if (results.length === 1 && results[0].name === req.body.name) {
      return res.cc('分类名称被占用，请更换后重试！')
    }

    if (results.length === 1 && results[0].alias === req.body.alias) {
      return res.cc('分类别名被占用，请更换后重试！')
    }


    // TODO：新增文章分类
  })
}