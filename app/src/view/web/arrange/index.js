import React, { Component } from 'react';
import { Pagination, Empty } from 'antd';
import { connect } from 'react-redux'
import { getArticleList, emptyArticleList } from '@/store/article/action'
import './index.scss'
import TplOne from './tplOne'
import TplTwo from './tplTwo'

class Arrange extends Component {
    getArticles(params) {
        let { location, dispatchGetArticleList } = this.props
        let state = location.state || {}
        let { tagName, categoryName } = state
        dispatchGetArticleList({ ...params, tagName, categoryName, attributes: 'id,title,createdAt' })
    }
    onChange = (currentPage) => {
        this.getArticles({ currentPage })
    }
    UNSAFE_componentWillMount() {
        this.getArticles()
    }
    componentWillUnmount() {
        let { dispatchEmptyArticleList } = this.props
        dispatchEmptyArticleList()
    }
    render() {
        let { articleList, pager, location } = this.props;
        let { currentPage, pageSize, total } = pager
        let { pathname } = location
        let Tpl = () => (/arrange/.test(pathname) ? <TplOne data={articleList} /> : <TplTwo data={articleList} />)
        return (
            <div className='arrange-container'>
                {articleList.length ?
                    <div>
                        <Tpl />
                        <Pagination style={{ textAlign: 'right' }} current={currentPage} pageSize={pageSize} total={total} onChange={this.onChange} />
                    </div>
                    : <Empty description='暂无数据' imageStyle={{ marginTop: '145px' }} />
                }
            </div>
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
    dispatchGetArticleList: params => dispatch(getArticleList(params)),
    dispatchEmptyArticleList: () => dispatch(emptyArticleList())
})

export default connect(mapStateToProps, mapDispatchToProps)(Arrange)