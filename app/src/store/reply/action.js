import { REPLY_ADD, REPLY_DEL } from '../actionTypes'
import API from '@/services'
import { message } from 'antd';

export function replyAdd(params) {
    return async (dispatch, getState) => {
        let res = await API.REPLY_ADD(params)
        if (res) {
            let { status, response } = res
            if (status) {
                let { name, auth } = getState().user
                dispatch({
                    type: REPLY_ADD, data: { ...response, user: { name, auth } }
                })
            }
        }
        return res
    }
}
export function delReply(params) {
    return async (dispatch) => {
        let { id } = params
        let res = await API.REPLY_DEL({ id })
        if (res) {
            if (res.status) {
                message.success(res.message);
                dispatch({ type: REPLY_DEL, data: params })
            }
        }
    }
}