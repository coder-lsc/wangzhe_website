const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: { type: String },
  avatar: { type: String }  // 由于一般图片太大 不会直接上传到数据库 所以这里数据库只保留图片地址 
})

module.exports = mongoose.model('Hero', schema)