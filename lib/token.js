const jwt = require('jsonwebtoken')
const { TOKEN_KEY } = require('../config')
exports.createToken = async (data) => {
    return await jwt.sign(data, TOKEN_KEY, { expiresIn: 1000000 })
}
exports.getUserInfo = async ctx => {
    let authorization = ctx.header.authorization;
    if (authorization) {
        let token = authorization.split(' ')[1]
        try {
            let payload = jwt.verify(token, TOKEN_KEY)
            return payload
        } catch (e) {
            return {
                auth: 0
            }
        }
    } else {
        return false
    }
}