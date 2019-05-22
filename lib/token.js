const jwt = require('jsonwebtoken')
const { TOKEN_KEY } = require('../config')
exports.createToken = async (data) => {
    return await jwt.sign(data, TOKEN_KEY, { expiresIn: 1000000 })
}