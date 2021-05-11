const AdminUser = require('../../models/AdminUser')

module.exports = app => {
  const express = require('express')
  const router = express.Router({
    mergeParams: true
  }) // 子路由
  router.post('/', async (req, res) => {
    const model = await req.Model.create(req.body)
    res.send(model)
  })
  router.put('/:id', async (req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })
  router.delete('/:id', async (req, res) => {
    await req.Model.findByIdAndDelete(req.params.id, req.body)
    res.send({
      success: true
    })
  })
  router.get('/', async (req, res) => {
    // 不加populate('parent)返回的是parent的id值 加上之后返回parent对象 可以从network看
    // const items = await req.Model.find().populate('parent').limit(10) 
    // 为了实现通用性 改为以下写法
    const queryOptions = {}
    if (req.Model.modelName === 'Category') { // 上级分类 对应的每个数据创建时的上级分类parent
      queryOptions.populate = 'parent'
    }
    const items = await req.Model.find().setOptions(queryOptions).limit(10)  // 
    res.send(items)
  })
  router.get('/:id', async (req, res) => {
    const model = await req.Model.findById(req.params.id)
    res.send(model)
  })
  
  app.use('/admin/api/rest/:resource', async (req, res, next) => {
    const modelName = require('inflection').classify(req.params.resource) // 转类名
    req.Model = require(`../../models/${modelName}`) // 直接挂在到请求对象上
    next()
  }, router)
  
  const multer = require('multer')
  const upload = multer({ dest: __dirname + '/../../uploads' })
  console.log(__dirname + '/../..uploads');
  app.post('/admin/api/upload', upload.single('file'), async(req, res) => {
    const file = req.file
    file.url = `http://localhost:3000/uploads/${file.filename}`
    res.send(file)
  })

  app.post('/admin/api/login', async (req, res) => {
    const { username, password } = req.body
    // 1.根据用户名找用户
    const user = await AdminUser.findOne({
      username: username
    }).select('+password')
    if(!user) {
      return res.status(422).send({
        message: '用户不存在'
      })
    }
    // 2.校验密码
    const isValid = require('bcrypt').compareSync(password, user.password)
    if(!isValid) {
      return res.status(422).send({
        message: '密码错误'
      })
    }
    // 3.返回Token
    const jwt = require('jsonwebtoken')
    const token = jwt.sign({id: user._id}, app.get('secret'))
    res.send({token})
  })
}