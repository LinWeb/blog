
import axios from 'axios'
import { CATEGORY_URL } from '../../config/api'

let CATEGORY = async () => {
    return await axios.get(CATEGORY_URL)
}

export {
    CATEGORY
}