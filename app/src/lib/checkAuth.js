import jwt from 'jsonwebtoken'

// 校验当前用户是否管理员身份
export function getAuth(token) {
    let payload = jwt.decode(token)
    if (payload) {
        return payload.auth
    } else {
        return false
    }
}