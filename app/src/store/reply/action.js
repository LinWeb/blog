import { REPLY_ADD } from '../actionTypes'
import API from '@/services'

export function replyAdd(params) {
    return async (dispatch, getState) => {
        let res = await API.REPLY_ADD(params)
        if (res) {
            let { status, response } = res
            if (status) {
                let { name } = getState().user
                dispatch({
                    type: REPLY_ADD, data: { ...response, user: { name } }
                })
            }
        }
        return res
    }
}
