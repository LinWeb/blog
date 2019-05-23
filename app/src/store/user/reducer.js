import state from './state'
import { GET_USER } from '../actionTypes'
let initState = state
const user = (state = initState, { type, data }) => {
    switch (type) {
        case GET_USER:
            return Object.assign({}, ...state, { userId: data.id })
        default:
            return state
    }
}

export default user