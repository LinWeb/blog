import * as USER from './user';
// import * as COMMENT from './comment'
import * as ARTICLE from './article'
import * as TAG from './tag'
import * as CATEGORY from './category'
import { BASE_URL } from '@/config/api'
// import checkLogin from '../check/check_login'

export default {
    ...ARTICLE, ...TAG, ...CATEGORY, ...USER
}