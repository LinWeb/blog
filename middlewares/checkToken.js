const koaJwt = require('koa-jwt')
const { TOKEN_KEY } = require('../config')
module.exports = koaJwt({ secret: TOKEN_KEY }).unless({ path: [/^((?!(user|add|del|update)).)+$/] })