const express = require('express');
const bodyParse = require('./自定义中间件2');
const app = express();
const port = 8088;

app.use(bodyParse)

app.post('/user', (req, res) => {
  res.send('OK')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://127.0.0.1:${port}`);
})