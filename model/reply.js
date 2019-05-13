const sequelize = require('../config/db')

const Sequelize = require('sequelize');
const replyModel = sequelize.define('reply', {
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
    commentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
})
replyModel.sync({ force: false })

module.exports = replyModel