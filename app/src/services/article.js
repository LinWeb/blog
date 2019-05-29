
import axios from '@/lib/axios'
import { GET_ARTICLES_URL, GET_ARTICLE_DETAIL_URL } from '@/config/api'

let GET_ARTICLES = async (params) => {
    return await axios.get(GET_ARTICLES_URL, { params })
}
let GET_ARTICLE_DETAIL = async (params) => {
    return await axios.get(GET_ARTICLE_DETAIL_URL, { params })
}
export {
    GET_ARTICLES, GET_ARTICLE_DETAIL
}