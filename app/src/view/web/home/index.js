import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import ArticleList from '@/component/web/articleList'
import { getArticleList } from '@/store/article/action'
import { Pagination, Empty } from 'antd'
import qs from 'querystring'

class Home extends Component {
    onChange = (currentPage) => {
        let { history, dispatchGetArticleList } = this.props
        let keyword = this.getKeyWord()
        history.push({
            pathname: '/article',
            search: (keyword ? 'keyword=' + keyword + '&' : '') + 'currentPage=' + currentPage
        })
        dispatchGetArticleList({ keyword, currentPage })
    }
    getKeyWord() {
        let { search } = this.props.location
        let keyword = ''
        if (search) {
            let obj = qs.parse(search.substring(1))
            keyword = obj['keyword']
        }
        return keyword
    }
    UNSAFE_componentWillMount() {
        let { dispatchGetArticleList } = this.props
        let { search } = this.props.location
        let params = qs.parse(search.substring(1))
        dispatchGetArticleList(params)
    }
    render() {
        let { articleList, pager, loading } = this.props;
        let { currentPage, pageSize, total } = pager
        return (
            <div className='home-container' style={{ margin: '0px 26px' }}>
                {loading ? null
                    : articleList.length ?
                        <Fragment>
                            <ArticleList data={articleList}></ArticleList>
                            <Pagination style={{ textAlign: 'right', marginBottom: 22 }}
                                current={currentPage}
                                pageSize={pageSize}
                                total={total}
                                onChange={this.onChange}
                            />
                        </Fragment>
                        : <Empty description='暂无数据' imageStyle={{ marginTop: '145px' }} />
                }
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