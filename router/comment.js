const Router = require('koa-router')
const router = new Router()
const commentController = require('../controller/comment')

router.post('/add', commentController.add)
router.get('/list', commentController.list)
router.del('/del/:id', commentController.del)

module.exports = router