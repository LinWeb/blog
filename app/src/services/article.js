
import axios from 'axios'
import API from '@/config/api'

let GET_ARTICLES = async (data) => {
    return await axios.get(API.GET_ARTICLES_URL, data)
}

export {
    GET_ARTICLES
}