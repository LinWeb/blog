import { GET_USER_INFO } from '../actionTypes'
import { message } from 'antd';
import API from '@/services/index'

export function checkUsername(params) {
    return async () => {
        let res = await API.CHECK_USERNAME(params)
        return res
    }

}
export function register(params) {
    return async () => {
        let res = await API.REGISTER(params)
        return res
    }

}
export function login(params) {
    return async (dispatch) => {
        let res = await API.LOGIN(params)
        if (res) {
            let { status, response } = res
            if (status) {
                message.success('登录成功');
                dispatch({
                    type: GET_USER_INFO, data: response
                })
                localStorage.setItem('token', response.token)
            }
        }
        return res
    }

}