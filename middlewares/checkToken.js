const koaJwt = require('koa-jwt')
const { TOKEN_KEY } = require('../config')
// 校验请求的接口是否需要登录用户
module.exports = koaJwt({ secret: TOKEN_KEY }).unless(
    {
        path: [/^((?!(user|add|del|update)).)+$/, /(login|register|checkUsername)/]
    }
)