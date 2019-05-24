import React, { Component } from 'react';
import { Timeline, Icon, Pagination, Empty } from 'antd';
import { connect } from 'react-redux'
import { getArticleList } from '@/store/article/action'
import './index.scss'

class Arrange extends Component {
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
        let data = articleList.map(({ title, createdAt }) => {
            let time = new Date(createdAt)
            let day = time.getDate()
            let month = time.getMonth() + 1
            let year = time.getFullYear()
            day = day < 10 ? '0' + day : day
            month = month < 10 ? '0' + month : month
            let date = month + '-' + day
            return {
                title, date, year
            }
        })
        let res = []
        let prevYear = 0
        data.forEach((item, index) => {
            let { year } = item
            if (index === 0) {
                res.push(year)
                prevYear = year
            } else {
                if (year !== prevYear) {
                    res.push(year)
                    prevYear = year
                }
            }
            res.push(item)
        })
        return (
            <div className='arrange-container'>
                {res.length ?
                    <div>
                        <Timeline>
                            <Timeline.Item>Nice! {total} posts in total. Keep on posting.</Timeline.Item>
                            {res.map((item, key) =>
                                Object.prototype.toString.call(item) === '[object Object]' ?
                                    <Timeline.Item key={key}>{item.date} <span className='title'>{item.title}</span></Timeline.Item>
                                    : <Timeline.Item key={key} dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} color="red">
                                        {item}
                                    </Timeline.Item>
                            )}
                        </Timeline>
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
    dispatchGetArticleList: params => dispatch(getArticleList(params))
})

export default connect(mapStateToProps, mapDispatchToProps)(Arrange)