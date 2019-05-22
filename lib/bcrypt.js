const bcrypt = require('bcrypt')
exports.passwordHash = async password => {
    return await bcrypt.hashSync(password, 10)
}
exports.passwordCompare = async (password, passwordHash) => {
    return await bcrypt.compareSync(password, passwordHash)
}