import { GET_USER_INFO, LOGOUT, GET_USER_LIST, UPDATE_LOADING, DEL_USER } from '../actionTypes'
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
            }
        }
        return res
    }
}
export function updateUser(params) {
    return async (dispatch) => {
        let res = await API.UPDATE_USER(params)
        if (res) {
            let { status } = res
            if (status) {
                message.success('修改成功');
                dispatch({
                    type: GET_USER_INFO, data: { name: params.name }
                })
            }
        }
        return res
    }
}
export function logout() {
    return async (dispatch) => {
        dispatch({ type: LOGOUT })
    }
}


export function getUserList(params) {
    return async (dispatch) => {
        dispatch({ type: UPDATE_LOADING, data: { loading: true } })
        let data = await API.GET_USERS(params)
        dispatch({ type: UPDATE_LOADING, data: { loading: false } })
        if (data) {
            let { status, response, pager } = data
            if (status) {
                dispatch({ type: GET_USER_LIST, data: { userList: response, pager } })
            }
        }
    }
}
export function delUser(params) {
    return async (dispatch) => {
        let res = await API.USER_DEL(params)
        if (res) {
            if (res.status) {
                dispatch({ type: DEL_USER, data: params })
            }
        }
    }
}