const Router = require('koa-router')
const router = new Router()
const replyController = require('../controller/reply')

router.post('/add', replyController.add)
router.post('/del', replyController.del)

module.exports = router