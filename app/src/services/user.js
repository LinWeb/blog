
import axios from '@/lib/axios'
import { REGISTER_URL, LOGIN_URL, CHECK_USERNAME_URL, UPDATE_USER_URL } from '@/config/api'

let REGISTER = async (data) => {
    return await axios.post(REGISTER_URL, data)
}
let CHECK_USERNAME = async (data) => {
    return await axios.post(CHECK_USERNAME_URL, data)
}
let LOGIN = async (data) => {
    return await axios.post(LOGIN_URL, data)
}
let UPDATE_USER = async (data) => {
    return await axios.post(UPDATE_USER_URL, data)
}
export {
    REGISTER, LOGIN, CHECK_USERNAME, UPDATE_USER
}