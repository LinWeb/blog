const Koa = require('koa')
const app = new Koa()
const logger = require('koa-logger')
const bodyparser = require('koa-bodyparser')
const router = require('./router/index')


app.use(logger())
app.use(bodyparser())


app.use(router.routes()).use(router.allowedMethods())

app.use(async (ctx) => {
    ctx.body = 'blog'
})




app.listen(3000)