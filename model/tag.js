const sequelize = require('../config/db')
const Tag = sequelize.import('../schemas/tag')
Tag.sync({ force: false })

class tagModel {
    // 添加标签
    static async add(data) {
        return await Tag.create(data)
    }
    static async list() {
        return await Tag.findAll()
    }
}

module.exports = tagModel