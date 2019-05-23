
import axios from 'axios'
import API from '@/config/api'

let GET_ARTICLES = async (params) => {
    return await axios.get(API.GET_ARTICLES_URL, { params })
}

export {
    GET_ARTICLES
}