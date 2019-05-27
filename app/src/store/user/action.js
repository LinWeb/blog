import { GET_USER } from '../actionTypes'
import API from '@/services/index'
export function getUser(id) {
    return {
        type: GET_USER,
        id
    }
}
export function register(params) {
    return async () => {
        let res = await API.REGISTER(params)
        return res
    }

}
