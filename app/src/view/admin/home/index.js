import React, { Component } from 'react';
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
        this.getArticles({})
    }
    getArticles = (newParams) => {
        let { dispatchGetArticleList } = this.props
        let params = { ...this.state.params, ...newParams }
        this.setState(() => ({
            params
        }))
        dispatchGetArticleList(params)
    }
    render() {
        let { articleList, pager } = this.props
        return (
            <div className='home-container' style={{ padding: '12px 33px 45px' }}>
                <ArticleFilter getArticles={this.getArticles}></ArticleFilter>
                <ArticleList getArticles={this.getArticles} data={articleList} pager={pager}></ArticleList>
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