const articleModel = require('../model/article')


class articleController {
    // 添加标签
    static async add(ctx) {
        try {
            let params = ctx.request.body
            let response = await articleModel.create(params)
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
        let res = await articleModel.findAll()
        ctx.body = res
    }
}

module.exports = articleController