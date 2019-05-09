const Router = require('koa-router')
const router = new Router()
const tagRouter = require('./tag')
router.use('/tag', tagRouter.routes())
module.exports = router