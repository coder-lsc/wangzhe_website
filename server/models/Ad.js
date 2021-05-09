const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: { type: String },
  items: [{
    image: { type: String }, // 图片地址
    url: { type: String } // 点击图片跳转的目的链接的地址
  }]
 
})

module.exports = mongoose.model('Ad', schema)