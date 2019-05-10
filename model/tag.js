const sequelize = require('../config/db')

const Sequelize = require('sequelize');
const tagModel = sequelize.define('tag', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
})
tagModel.sync({ force: false })

module.exports = tagModel