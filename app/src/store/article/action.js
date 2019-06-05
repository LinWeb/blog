import { GET_ARTICLE_LIST, GET_NEW_THREE_ARTICLES, EMPTY_ARTICLE_LIST, UPDATE_LOADING, DEL_ARTICLE } from '../actionTypes'
import API from '@/services/index'

export function getArticleList(params) {
    return async (dispatch) => {
        dispatch(emptyArticleList())
        dispatch({ type: UPDATE_LOADING, data: { loading: true } })
        let data = await API.GET_ARTICLES(params)
        dispatch({ type: UPDATE_LOADING, data: { loading: false } })
        if (data) {
            let { status, response, pager } = data
            if (status) {
                dispatch({ type: GET_ARTICLE_LIST, data: { articleList: response, pager } })
            }
        }
    }
}
export function getArticleDetail(params) {
    return async (dispatch) => {
        dispatch({ type: UPDATE_LOADING, data: { loading: true } })
        let res = await API.GET_ARTICLE_DETAIL(params)
        dispatch({ type: UPDATE_LOADING, data: { loading: false } })
        return res
    }
}
function emptyArticleList() {
    return {
        type: EMPTY_ARTICLE_LIST
    }
}
export function getNewThreeArticles() {
    return async (dispatch) => {
        let data = await API.GET_ARTICLES({ pageSize: 3 })
        if (data) {
            let { status, response, } = data
            if (status) {
                dispatch({ type: GET_NEW_THREE_ARTICLES, data: response })
            }
        }
    }
}
export function addArticle(params) {
    return async () => {
        let res = await API.ARTICLE_ADD(params)
        return res
    }
}
export function updateArticle(params) {
    return async () => {
        let res = await API.ARTICLE_UPDATE(params)
        return res
    }
}
export function delArticle(params) {
    return async (dispatch) => {
        let res = await API.ARTICLE_DEL(params)
        if (res) {
            if (res.status) {
                dispatch({ type: DEL_ARTICLE, data: params })
            }
        }
    }
}