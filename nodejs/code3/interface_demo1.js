const express = require('express');
const apiRouter = require('./apiRouter');
const cors = require('cors');

const app = express();
const port = 8088;

// 配置解析表单数据的中间件
app.use(express.urlencoded({extended: false}))

// 必须在配置cors 中间件之前，配置JSONP 的借口
app.get('/api/jsonp', (req, res) => {
  //TODO 定义JSONP 借口具体的实现过程
  // 1、得到函数的名称
  // 2、定义哟啊发送到客户端的数据对象
  // 3、拼接出一个函数的调用
  // 4、把拼接的字符串，响应给客户端
  const funcName = req.query.callback;
  const data = {name: 'admin_jsonp', age: 22};
  const scriptStr = `${funcName}(${JSON.stringify(data)})`;
  res.send(scriptStr);

})

// 必须在路由之前配置cros 解决跨域问题
app.use(cors());

// 使用路由
app.use('/api', apiRouter);


app.listen(port, () => {
  console.log(`Example app listening on port http://127.0.0.1:${port}`);
})