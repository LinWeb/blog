const Router = require('koa-router')
const router = new Router()
const tagRouter = require('./tag')

const userRouter = require('./user')

router.use('/tag', tagRouter.routes())
router.use('/user', userRouter.routes())
module.exports = router