import state from './state'
import { GET_TAG_LIST } from '../actionTypes'
let initState = state

const tag = (state = initState, { type, data }) => {
    switch (type) {
        case GET_TAG_LIST:
            return Object.assign({}, state, { tagList: data })
        default:
            return state
    }
}

export default tag