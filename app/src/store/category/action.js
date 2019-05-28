

import { GET_CATEGORY_LIST, EMPTY_CATEGORY_LIST, UPDATE_LOADING } from '../actionTypes'
import API from '@/services'

export function getCategoryList() {
    return async (dispatch) => {
        dispatch(emptyCategoryList())
        dispatch({ type: UPDATE_LOADING, data: { loading: true } })
        let data = await API.GET_CATEGORIES()
        dispatch({ type: UPDATE_LOADING, data: { loading: false } })
        if (data) {
            let { status, response } = data
            if (status) {
                dispatch({ type: GET_CATEGORY_LIST, data: response })
            }
        }
    }
}
function emptyCategoryList() {
    return {
        type: EMPTY_CATEGORY_LIST
    }
}
