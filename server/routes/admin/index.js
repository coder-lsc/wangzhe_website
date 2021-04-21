module.exports = app => {
  const express = require('express')
  const router = express.Router() // 子路由
  const Category = require('../../models/Category')
  router.post('/categories', async (req, res) => {
    const model = await Category.create(req.body)
    res.send(model)
  })
  router.put('/categories/:id', async (req, res) => {
    const model = await Category.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })
  router.delete('/categories/:id', async (req, res) => {
    await Category.findByIdAndDelete(req.params.id, req.body)
    res.send({
      success: true
    })
  })
  router.get('/categories', async (req, res) => {
    // 不加populate('parent)返回的是parent的id值 加上之后返回parent对象 可以从network看
    const items = await Category.find().populate('parent').limit(10) 
    res.send(items)
  })
  router.get('/categories/:id', async (req, res) => {
    const model = await Category.findById(req.params.id)
    res.send(model)
  })
  
  app.use('/admin/api', router)
}