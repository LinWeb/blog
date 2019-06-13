const { tagModel } = require('../model')

class tagController {
    // 标签列表
    static async list(ctx) {
        let response = await tagModel.findAll({ group: 'name' })
        ctx.body = {
            status: 1,
            message: '请求成功',
            response
        }
    }
}

module.exports = tagController