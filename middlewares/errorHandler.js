module.exports = async (ctx, next) => {
    return await next().catch(err => {
        if (401 === err.status) {
            ctx.body = {
                status: 0,
                message: '请登录'
            }
        } else {
            throw err
        }
    })
}