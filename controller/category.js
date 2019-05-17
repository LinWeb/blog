const { categoryModel } = require('../model')

class categoryController {
    // 添加分类
    static async add(ctx) {
        try {
            let params = ctx.request.body
            let response = await categoryModel.create(params)
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
        let res = await categoryModel.findAll()
        ctx.body = res
    }
}

module.exports = categoryController