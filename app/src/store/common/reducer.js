import state from './state'
import { UPDATE_LOADING } from '../actionTypes'
let initState = state

const common = (state = initState, { type, data }) => {
    switch (type) {
        case UPDATE_LOADING:
            return Object.assign({}, state, data)
        default:
            return state
    }
}

export default common