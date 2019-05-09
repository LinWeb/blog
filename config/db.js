const Sequelize = require('sequelize');

const sequelize = new Sequelize('blog', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize