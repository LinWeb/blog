// 校验请求的接口是否出错
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