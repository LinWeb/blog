const sequelize = require('../config/db')

const Sequelize = require('sequelize');
const commentModel = sequelize.define('comment', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    content: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    articleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
})
commentModel.sync({ force: false })

module.exports = commentModel