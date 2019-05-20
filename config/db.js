
const database = 'blog'
const username = 'root'
const password = 'root'
const options = {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define: {
        freezeTableName: true // 表名默认不加 s
    },
}
module.exports = {
    database, username, password, options
}