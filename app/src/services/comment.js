import { COMMENT_ADD_URL, COMMENT_DEL_URL, GET_COMMENTS_URL } from '@/config/api'
import axios from '@/lib/axios'

let GET_COMMENTS = async (data) => {
    return await axios.get(GET_COMMENTS_URL, { params: data })
}
let COMMENT_ADD = async (data) => {
    return await axios.post(COMMENT_ADD_URL, data)
}
let COMMENT_DEL = async (data) => {
    return await axios.post(COMMENT_DEL_URL, data)
}
export {
    GET_COMMENTS, COMMENT_ADD, COMMENT_DEL
}