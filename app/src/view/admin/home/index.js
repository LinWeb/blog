import React, { Component, Fragment } from 'react';
import ArticleList from '@/component/admin/articleList'
import ArticleFilter from '@/component/admin/articleFilter'
import { getArticleList } from '@/store/article/action'
import { connect } from 'react-redux'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            params: {}
        }
    }
    UNSAFE_componentWillMount() {
        let { dispatchGetArticleList } = this.props
        let { params } = this.state
        dispatchGetArticleList(params)
    }
    render() {
        let { articleList } = this.props
        return (
            <div className='home-container'>
                <ArticleFilter></ArticleFilter>
                <ArticleList data={articleList}></ArticleList>
            </div >
        )
    }
}
let mapStateToProps = state => {
    let { articleList, pager } = state.article.articleListData
    let { loading } = state.common
    return {
        articleList,
        pager,
        loading
    }
}
let mapDispatchToProps = dispatch => ({
    dispatchGetArticleList: params => dispatch(getArticleList(params))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)