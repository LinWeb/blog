
const database = 'blog'  // 数据库名称
const username = 'root'  // 数据库用户名
const password = 'root'  // 数据库密码
const options = {
    host: 'localhost',   // 数据库地址
    dialect: 'mysql',    // 数据库类型
    pool: {       // 数据库连接池，考虑到多个进程连接到数据库的情况
        max: 5,   // 最大连接数
        min: 0,   // 最小连接数
        acquire: 30000,  // 连接错误之前尝试获取的最长时间(以毫秒为单位)
        idle: 10000      // 连接池释放前最长的空闲时间(以毫秒为单位)
    },
    define: {
        freezeTableName: true // 表名后缀默认不加复数形式
    },
}
module.exports = {
    database, username, password, options
}