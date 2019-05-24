import React, { Component } from 'react';
import './index.scss'
import { connect } from 'react-redux'
import ArticleList from '@/component/web/articleList'
import { getArticleList } from '@/store/article/action'
import { Pagination, Empty } from 'antd'

class Home extends Component {
    onChange = (currentPage) => {
        let { history, dispatchGetArticleList } = this.props
        dispatchGetArticleList({ currentPage })
        history.push({
            search: 'currentPage=' + currentPage
        })
    }
    UNSAFE_componentWillMount() {
        let { dispatchGetArticleList } = this.props
        dispatchGetArticleList({})
    }
    render() {
        let { articleList, pager } = this.props;
        let { currentPage, pageSize, total } = pager
        return (
            <div className='home-container'>
                {articleList.length ?
                    <div>
                        <ArticleList data={articleList}></ArticleList>
                        <Pagination style={{ textAlign: 'right' }} current={currentPage} pageSize={pageSize} total={total} onChange={this.onChange} />
                    </div>
                    : <Empty description='暂无数据' imageStyle={{ marginTop: '145px' }} />
                }
            </div >
        )
    }
}

let mapStateToProps = state => {
    let { articleList, pager } = state.article.articleListData
    return {
        articleList,
        pager
    }
}
let mapDispatchToProps = dispatch => ({
    dispatchGetArticleList: params => dispatch(getArticleList(params))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)