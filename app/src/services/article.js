
import axios from '@/lib/axios'
import { GET_ARTICLES_URL, GET_ARTICLE_DETAIL_URL, ARTICLE_ADD_URL, ARTICLE_UPDATE_URL, ARTICLE_DEL_URL } from '@/config/api'

let GET_ARTICLES = async (params) => {
    return await axios.get(GET_ARTICLES_URL, { params })
}
let GET_ARTICLE_DETAIL = async (params) => {
    return await axios.get(GET_ARTICLE_DETAIL_URL, { params })
}
let ARTICLE_ADD = async (data) => {
    return await axios.post(ARTICLE_ADD_URL, data)
}
let ARTICLE_UPDATE = async (data) => {
    return await axios.post(ARTICLE_UPDATE_URL, data)
}
let ARTICLE_DEL = async (data) => {
    return await axios.post(ARTICLE_DEL_URL, data)
}

export {
    GET_ARTICLES, GET_ARTICLE_DETAIL, ARTICLE_ADD, ARTICLE_UPDATE, ARTICLE_DEL
}