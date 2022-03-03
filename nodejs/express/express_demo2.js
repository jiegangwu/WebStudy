const express = require('express');

const app = express();

const port = 8088;

app.use(express.static('./public'))

app.get('/', () => {

})
app.listen(port, (req, res) => {
  console.log(`Example app listening on port http://127.0.0.1:${port}`)
})
