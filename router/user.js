const Router = require('koa-router')
const router = new Router()
const userController = require('../controller/user')


router.post('/register', userController.register)
router.post('/login', userController.login)
router.get('/list', userController.list)
router.post('/update', userController.update)
router.del('/del/:id', userController.del)
module.exports = router