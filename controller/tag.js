const { tagModel } = require('../model')

class tagController {
    static async list(ctx) {
        let res = await tagModel.findAll({ group: 'name' })
        ctx.body = res
    }
}

module.exports = tagController