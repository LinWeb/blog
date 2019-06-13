const bcrypt = require('bcrypt')
// 密码加密
exports.passwordHash = async password => {
    return await bcrypt.hashSync(password, 10)
}
// 密码校验
exports.passwordCompare = async (password, passwordHash) => {
    return await bcrypt.compareSync(password, passwordHash)
}