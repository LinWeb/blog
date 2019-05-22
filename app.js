const Koa = require('koa')
const app = new Koa()
const logger = require('koa-logger')
const bodyparser = require('koa-bodyparser')
const checkToken = require('./middlewares/checkToken')
const errorHandler = require('./middlewares/errorHandler')
const router = require('./router/index')

app.use(logger())
app.use(bodyparser())
app.use(errorHandler) // 错误处理中间件
app.use(checkToken) // 校验登录中间件

app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', ctx.headers.origin)  // 跨域访问
    await next()
})

app.use(router.routes()).use(router.allowedMethods())  // 路由配置

app.listen(3000)