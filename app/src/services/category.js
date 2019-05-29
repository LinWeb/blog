
import axios from '@/lib/axios'
import { GET_CATEGORIES_URL } from '@/config/api'

let GET_CATEGORIES = async () => {
    return await axios.get(GET_CATEGORIES_URL)
}

export {
    GET_CATEGORIES
}