import state from './state'
import { GET_USER_INFO, LOGOUT, GET_USER_LIST, DEL_USER } from '../actionTypes'
import { getAuth } from '@/lib/checkAuth'

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
            let auth = getAuth(token) || state.auth
            return Object.assign({}, state, { userId, username, name, token, auth })
        case LOGOUT:
            localStorage.removeItem('userInfo')
            localStorage.removeItem('token')
            return Object.assign({}, state, {
                userId: 0,
                username: '',
                name: '',
                token: null,
                auth: 0
            })
        case GET_USER_LIST:
            return Object.assign({}, state, { userListData: data })
        case DEL_USER:
            var { id } = data
            var { pager, userList } = state.userListData
            var newUserList = userList.filter(item => item.id !== id)
            return Object.assign({}, state, { userListData: { pager, userList: newUserList } })
        default:
            return state
    }
}
export default user