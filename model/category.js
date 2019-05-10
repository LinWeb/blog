const sequelize = require('../config/db')

const Sequelize = require('sequelize');
const categoryModel = sequelize.define('category', {
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
categoryModel.sync({ force: false })

module.exports = categoryModel