const jwt = require('jsonwebtoken')
module.exports = async (ctx, next) => {
    let authorization = ctx.header.authorization;
    if (authorization) {
        let token = authorization.split(' ')[1]
        let decoded = jwt.decode(token, { complete: true })
        let auth = decoded.payload.auth
        let adminPathRegs = [/article\/(add|del|update)/, /\/del/, /user\/list/] // 需要管理员权限的url
        let isAdminPath = adminPathRegs.find(reg => reg.test(ctx.path))
        if (isAdminPath && !auth) {
            ctx.body = {
                status: 0,
                message: '权限不足'
            }
            return
        }
    }
    await next()
}