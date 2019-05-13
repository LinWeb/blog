const Router = require('koa-router')
const router = new Router()
const articleController = require('../controller/article')


router.get('/list', articleController.list)
router.post('/add', articleController.add)
router.del('/del/:id', articleController.del)
router.post('/update', articleController.update)
module.exports = router