const { getUserInfo } = require('../lib/token')
// 校验请求的接口是否需要管理员权限
module.exports = async (ctx, next) => {
    let user = await getUserInfo(ctx);
    if (user) {
        let adminPathRegs = [/article\/(add|del|update)/, /\/del/, /user\/list/]
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