import state from './state'
import { GET_ARTICLE_LIST, GET_NEW_THREE_ARTICLES, EMPTY_ARTICLE_LIST, DEL_ARTICLE } from '../actionTypes'
let initState = state
const article = (state = initState, { type, data }) => {
    switch (type) {
        case GET_ARTICLE_LIST:
            return Object.assign({}, state, { articleListData: data })
        case EMPTY_ARTICLE_LIST:
            return Object.assign({}, state, {
                articleListData: {
                    articleList: [],
                    pager: {
                        currentPage: 0,
                        pageCount: 0,
                        pageSize: 0,
                        total: 0
                    }
                }
            })
        case GET_NEW_THREE_ARTICLES:
            return Object.assign({}, state, { newThreeArticles: data })
        case DEL_ARTICLE:
            var { id } = data
            var { pager, articleList } = state.articleListData
            var newArticleList = articleList.filter(item => item.id !== id)
            return Object.assign({}, state, { articleListData: { pager, articleList: newArticleList } })
        default:
            return state
    }
}

export default article