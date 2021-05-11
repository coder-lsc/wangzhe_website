const express = require('express')

const app = express()

app.set('secret', 'i3i4u5y2t3')

app.use(require('cors')())
app.use(express.json())

// 托管静态文件
app.use('/uploads', express.static(__dirname + '/uploads'))

require('./plugins/db')(app)
require('./routes/admin')(app)

app.listen(3000, () => {
  console.log('http://localhost:3000');
})