
import axios from 'axios'
import API from '@/config/api'

let GET_CATEGORIES = async () => {
    return await axios.get(API.GET_CATEGORIES_URL)
}

export {
    GET_CATEGORIES
}