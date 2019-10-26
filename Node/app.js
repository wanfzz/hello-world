var express = require('express')
var app = express()
var port = 4002
app.use(express.static('./web'))

app.listen(port, () => {
  console.log('to locahost:4002')
})