import React, { Component, Fragment } from 'react';
import { Pagination, Empty } from 'antd';
import { connect } from 'react-redux'
import { getArticleList, } from '@/store/article/action'
import './index.scss'
import Bundle from '@/lib/bundle'

const TplOne = Bundle(() => import(
    /* webpackChunkName: "tplOne" */
    './tplOne'
))

const TplTwo = Bundle(() => import(
    /* webpackChunkName: "tplTwo" */
    './tplTwo'
))

class Arrange extends Component {
    getArticles(params) {
        let { location, dispatchGetArticleList } = this.props
        let state = location.state || {}
        let { tagName, categoryName } = state
        dispatchGetArticleList({ tagName, categoryName, attributes: 'id,title,createdAt', ...params, })
    }
    onChange = (currentPage) => {
        this.getArticles({ currentPage })
    }
    UNSAFE_componentWillMount() {
        this.getArticles()
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        let { pathname: nextPathname, state } = nextProps.location
        let { pathname: currentPathname } = this.props.location
        if (nextPathname !== currentPathname) {
            state = state || {}
            let { tagName, categoryName } = state
            this.getArticles({ tagName, categoryName });
        }
    }
    render() {
        let { articleList, pager, location, loading } = this.props;
        let { currentPage, pageSize, total } = pager
        let { pathname } = location
        let Tpl = () => (/arrange/.test(pathname) ? <TplOne total={total} data={articleList} /> : <TplTwo data={articleList} />)
        return (
            <div className='arrange-container'>
                {loading ? null
                    : articleList.length ?
                        <Fragment>
                            <Tpl />
                            <Pagination style={{ textAlign: 'right' }} current={currentPage} pageSize={pageSize} total={total} onChange={this.onChange} />
                        </Fragment>
                        : <Empty description='暂无数据' imageStyle={{ marginTop: '145px' }} />
                }
            </div>
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
    dispatchGetArticleList: params => dispatch(getArticleList(params)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Arrange)