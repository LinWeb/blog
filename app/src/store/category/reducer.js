import state from './state'
import { GET_CATEGORY_LIST } from '../actionTypes'
let initState = state
const category = (state = initState, { type, data }) => {
    switch (type) {
        case GET_CATEGORY_LIST:
            return Object.assign({}, state, { categoryList: data })
        default:
            return state
    }
}

export default category