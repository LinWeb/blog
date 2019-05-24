

import { GET_CATEGORY_LIST } from '../actionTypes'
import API from '@/services'

export function getCategoryList() {
    return async (dispatch) => {
        let data = await API.GET_CATEGORIES()
        if (data) {
            let { status, response } = data
            if (status) {
                dispatch({ type: GET_CATEGORY_LIST, data: response })
            }
        }
    }
}

