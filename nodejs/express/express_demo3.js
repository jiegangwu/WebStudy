const express = require('express');

const app = express();
const port = 8088;

app.get('/', (req, res) => {
  res.end('Hellp World!')
})
app.post('/', (req, res) => {
  res.end('Post Request!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://127.0.0.1:${port}`)
})