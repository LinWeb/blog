
import axios from '@/axios'
import { REGISTER_URL, LOGIN_URL } from '@/config/api'

let REGISTER = async (data) => {
    return await axios.post(REGISTER_URL, data)
}
let LOGIN = async (data) => {
    return await axios.post(LOGIN_URL, data)
}
export {
    REGISTER, LOGIN,
}