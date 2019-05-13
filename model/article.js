const sequelize = require('../config/db')

const Sequelize = require('sequelize');
const articleModel = sequelize.define('article', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    content: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    tagIds: {
        type: Sequelize.JSON,
    },
    categoryIds: {
        type: Sequelize.JSON,
    },
    readCount: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    }

})
articleModel.sync({ force: false })

module.exports = articleModel