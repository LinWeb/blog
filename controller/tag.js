const tagModel = require('../model/tag')


class tagController {
    // 添加标签
    static async add(ctx) {
        try {
            const params = ctx.request.body
            const response = await tagModel.add(params)
            ctx.body = {
                status: 1,
                message: '添加成功',
                response
            }
        } catch (err) {
            ctx.body = {
                status: 0,
                message: err.errors
            }
        }
    }
    static async list(ctx) {
        const res = await tagModel.list()
        ctx.body = res
    }
}

module.exports = tagController