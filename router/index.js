const Router = require('koa-router')
const router = new Router({ prefix: '/api' })
const articleRouter = require('./article')
const tagRouter = require('./tag')
const categoryRouter = require('./category')
const userRouter = require('./user')
const commentRouter = require('./comment')
const replyRouter = require('./reply')

router.use('/tag', tagRouter.routes())
router.use('/category', categoryRouter.routes())
router.use('/user', userRouter.routes())
router.use('/article', articleRouter.routes())
router.use('/comment', commentRouter.routes())
router.use('/reply', replyRouter.routes())

module.exports = router