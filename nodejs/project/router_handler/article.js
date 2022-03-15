// 文章的处理函数模块
const path = require('path');
const db = require('../db/index');

// 发布文章的处理函数
exports.addArticle = (req, res) => {
  // console.log(req.body) // 文本类型的数据
  // console.log('--------分割线----------')
  // console.log(req.file) // 文件类型的数据

  if (!req.file || req.file.fieldname !== 'cover_img') {
    return res.cc('文章封面是必选参数！')
  }

  // TODO：证明数据都是合法的，可以进行后续业务逻辑的处理
  // 处理文章的信息对象
  const articleInfo = {
    // 标题、内容、发布状态、所属分类的Id
    ...req.body,
    // 文章封面的存放路径
    cover_img: path.join('/uploads', req.file.originalname),
    // 文章的发布时间
    pub_date: new Date(),
    // 文章作者的Id
    author_id: req.user.id,
  }
  // console.log('*******')
  // console.log(articleInfo)
  // console.log('*******')

  const sql = `insert into ev_articles set ?`
  db.query(sql, articleInfo, (err, results) => {
    if (err) return res.cc(err)
    if (results.affectedRows !== 1) return res.cc('发布新文章失败！')
    res.cc('发布文章成功！', 0)
  })
}
// 获取文章的列表数据
exports.getArticleById = (req, res) => {
  const articleInfo = {
    ...req.body,
  }
  console.log(articleInfo)
  const sql = 'select Id,title,pub_date,state from ev_articles where state="已发布" '
  db.query(sql, (err, results) => {
    // 执行 SQL 语句失败
    if (err) {
      return res.cc(err)
    }
    // SQL 语句执行成功，但是没有查询到任何数据
    if (results.length === 0) {
      return res.cc('获取文章列表失败！')
    }
    // 把数据响应给客户端
    res.send({
      status: 0,
      message: '获取文章列表成功！',
      data: results,
    })
    // res.send("获取文章的列表数据  OK")
  })
}


// 根据 Id 删除文章数据
exports.deleteArticleById = (req, res) => {

  const sql = 'update ev_articles set is_delete=1 where Id=?'

  db.query(sql, [req.params.id], (err, results) => {
      if (err) {
        return res.cc(err)
      }
      if (results.affectedRows !== 1) {
        return res.cc('删除文章数据失败')
      }
      // 删除文章分类成功
      res.cc('删除文章数据成功！', 0)
    }
  )
  // res.send('根据 Id 删除文章数据成功')
}