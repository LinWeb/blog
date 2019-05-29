import { GET_ARTICLE_LIST, GET_NEW_THREE_ARTICLES, EMPTY_ARTICLE_LIST, UPDATE_LOADING } from '../actionTypes'
import API from '@/services/index'

export function getArticleList(params) {
    return async (dispatch) => {
        dispatch(emptyArticleList())
        params.pageSize = 2
        dispatch({ type: UPDATE_LOADING, data: { loading: true } })
        let data = await API.GET_ARTICLES(params)
        dispatch({ type: UPDATE_LOADING, data: { loading: false } })
        if (data) {
            let { status, response, pager } = data
            if (status) {
                dispatch({ type: GET_ARTICLE_LIST, data: { articleList: response, pager } })
                if (pager.currentPage === 1 && !params.keyword && !params.tagName && !params.categoryName) {
                    // 加载第一页的时候就执行
                    let newThreeArticles = response.slice(0, 3).map(({ id, title }) => ({ id, title }))
                    dispatch(getNewThreeArticles(newThreeArticles))
                }
            }
        }
    }
}
export function getArticleDetail(params) {
    return async () => {
        let res = await API.GET_ARTICLE_DETAIL(params)
        return res
    }
}
function emptyArticleList() {
    return {
        type: EMPTY_ARTICLE_LIST
    }
}
function getNewThreeArticles(data) {
    return {
        type: GET_NEW_THREE_ARTICLES,
        data
    }
}
