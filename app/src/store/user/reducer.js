import state from './state'
import { GET_USER_INFO } from '../actionTypes'
let initState = state
const user = (state = initState, { type, data }) => {
    switch (type) {
        case GET_USER_INFO:
            let { id: userId, name: username, token } = data
            return Object.assign({}, state, { userId, username, token })
        default:
            return state
    }
}

export default user