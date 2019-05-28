import state from './state'
import { GET_USER_INFO, LOGOUT } from '../actionTypes'
let initState = state
const user = (state = initState, { type, data }) => {
    switch (type) {
        case GET_USER_INFO:
            let { id: userId, username, name, token } = data
            userId = userId || state.userId
            username = username || state.username
            name = name || state.name
            token = token || state.token
            localStorage.setItem('userInfo', JSON.stringify({ userId, username, name }))
            localStorage.setItem('token', token)
            return Object.assign({}, state, { userId, username, name, token })
        case LOGOUT:
            localStorage.removeItem('userInfo')
            localStorage.removeItem('token')
            return Object.assign({}, state, {
                userId: 0,
                username: '',
                name: '',
                token: null
            })
        default:
            return state
    }
}
export default user