import { REPLY_ADD_URL, REPLY_DEL_URL } from '@/config/api'
import axios from '@/lib/axios'

let REPLY_ADD = async (data) => {
    return await axios.post(REPLY_ADD_URL, data)
}
let REPLY_DEL = async (data) => {
    return await axios.post(REPLY_DEL_URL, data)
}
export {
    REPLY_ADD, REPLY_DEL
}