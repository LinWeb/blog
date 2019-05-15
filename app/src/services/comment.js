import { GET_COMMENT_URL, ADD_COMMENT_URL, COMMENT_UPDATE_LIKE_URL } from '../../config/api'
import axios from 'axios'

let GET_COMMENT = async (data) => {
    return await axios.get(GET_COMMENT_URL, { params: data })
}
let ADD_COMMENT = async (data) => {
    return await axios.post(ADD_COMMENT_URL, data)
}

let COMMENT_UPDATE_LIKE = async (data) => {
    return await axios.post(COMMENT_UPDATE_LIKE_URL, data)
}
export {
    GET_COMMENT, ADD_COMMENT, COMMENT_UPDATE_LIKE
}