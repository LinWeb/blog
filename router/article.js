const Router = require('koa-router')
const router = new Router()
const articleController = require('../controller/article')

router.get('/list', articleController.list)
router.get('/detail', articleController.detail)
router.get('/byTag', articleController.byTag)
router.get('/byCategory', articleController.byCategory)
router.post('/add', articleController.add)
router.post('/del', articleController.del)
router.post('/update', articleController.update)

module.exports = router