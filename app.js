const koa = require('koa')
const app = new koa()
const logger = require('koa-logger')

app.use(logger())
app.use(async (ctx) => {
    ctx.body = 'blog'
})


app.listen(3000)