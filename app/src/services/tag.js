
import axios from '@/lib/axios'
import { GET_TAGS_URL } from '@/config/api'

let GET_TAGS = async () => {
    return await axios.get(GET_TAGS_URL)
}

export {
    GET_TAGS
}