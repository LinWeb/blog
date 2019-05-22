const { categoryModel, sequelize } = require('../model')

class categoryController {
    static async list(ctx) {
        let res = await categoryModel.findAll({
            group: 'name',
            attributes: ['name', [sequelize.fn('COUNT', sequelize.col('name')), 'articleCount']]
        })
        ctx.body = res
    }
}

module.exports = categoryController