const { getUserInfo } = require('../lib/token')
module.exports = async (ctx, next) => {
    let user = getUserInfo(ctx);
    if (user) {
        let adminPathRegs = [/article\/(add|del|update)/, /\/del/, /user\/list/] // 需要管理员权限的url
        let isAdminPath = adminPathRegs.find(reg => reg.test(ctx.path))
        if (isAdminPath && !user.auth) {
            ctx.body = {
                status: 0,
                message: '权限不足'
            }
            return
        }
    }
    await next()
}