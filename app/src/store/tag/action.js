

import { GET_TAG_LIST } from '../actionTypes'
import API from '@/services/index'

export function getTagList() {
    return async (dispatch) => {
        let data = await API.GET_TAGS()
        if (data) {
            let { status, response } = data
            if (status) {
                dispatch({ type: GET_TAG_LIST, data: response })
            }
        }
    }
}
