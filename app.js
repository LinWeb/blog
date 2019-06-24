const Koa = require('koa')
const app = new Koa()
const logger = require('koa-logger')
const bodyparser = require('koa-bodyparser')
const checkToken = require('./middlewares/checkToken')
const checkAuth = require('./middlewares/checkAuth')
const errorHandler = require('./middlewares/errorHandler')
const router = require('./router/index')

app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', ctx.headers.origin)  // 跨域访问
    ctx.set('Access-control-Allow-Methods', '*')
    ctx.set('Access-control-Allow-Headers', 'X-Requested-With,content-type,Authorization') // 设置接收携带Authorization的请求
    await next()
})

app.use(logger())
app.use(bodyparser())
app.use(errorHandler) // 错误处理中间件
app.use(checkToken) // 校验登录中间件
app.use(checkAuth) // 校验权限中间件
app.use(router.routes()).use(router.allowedMethods())  // 路由配置

app.listen(3000)