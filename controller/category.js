const { categoryModel } = require('../model')

class categoryController {
    static async list(ctx) {
        let res = await categoryModel.findAll({ group: 'name' })
        ctx.body = res
    }
}

module.exports = categoryController