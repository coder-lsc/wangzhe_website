module.exports = options => {
  
  return async (req, res, next) => {
    const modelName = require('inflection').classify(req.params.resource) // 转类名
    req.Model = require(`../models/${modelName}`) // 直接挂在到请求对象上
    next()
  }
}