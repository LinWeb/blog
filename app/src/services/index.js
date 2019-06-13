import * as USER from './user';
import * as COMMENT from './comment'
import * as ARTICLE from './article'
import * as TAG from './tag'
import * as CATEGORY from './category'
import * as REPLY from './reply'

export default {
    ...ARTICLE, ...TAG, ...CATEGORY, ...USER, ...COMMENT, ...REPLY
}