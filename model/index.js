
const Sequelize = require('sequelize');
const dbConfig = require('../config/db')
const fs = require('fs')
const path = require('path')
let { database, username, password, options } = dbConfig
let sequelize = new Sequelize(database, username, password, options)

let db = {}

// 读取各个模块
fs.readdirSync(__dirname)
    .filter(file => file !== 'index.js')
    .forEach(file => {
        const model = sequelize.import(path.join(__dirname, file))
        db[model.name + 'Model'] = model
    })

// 执行相关联的模块
Object.keys(db).forEach(name => {
    db[name].associate && db[name].associate(db)
})

db.sequelize = sequelize

sequelize.sync()

module.exports = db