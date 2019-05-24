
import axios from 'axios'
import API from '@/config/api'

let GET_TAGS = async () => {
    return await axios.get(API.GET_TAGS_URL)
}

export {
    GET_TAGS
}