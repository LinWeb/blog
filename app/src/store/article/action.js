import { GET_ARTICLE_LIST, GET_NEW_THREE_ARTICLES } from '../actionTypes'
import API from '@/services/index'

export function getArticleList(params) {
    return async (dispatch) => {
        params.pageSize=2
        let data = await API.GET_ARTICLES(params)
        if (data) {
            let { status, response, pager } = data
            if (status) {
                dispatch({ type: GET_ARTICLE_LIST, data: { articleList: response, pager } })
                if (pager.currentPage == 1 && !params.keyword) {
                    // 加载第一页的时候就执行
                    let newThreeArticles = response.slice(0, 3).map(({ id, title }) => ({ id, title }))
                    dispatch(getNewThreeArticles(newThreeArticles))
                }
            }
        }
    }
}

function getNewThreeArticles(data) {
    return {
        type: GET_NEW_THREE_ARTICLES,
        data
    }
}
