const Router = require('koa-router')
const router = new Router()
const tagController = require('../controller/tag')


router.get('/list', tagController.list)
router.post('/add', tagController.add)
module.exports = router