import jwt from 'jsonwebtoken'

export function getAuth(token) {
    let payload = jwt.decode(token)
    if (payload) {
        return payload.auth
    } else {
        return false
    }
}