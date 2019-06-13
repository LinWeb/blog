const Router = require('koa-router')
const router = new Router()
const categoryController = require('../controller/category')

router.get('/list', categoryController.list)

module.exports = router