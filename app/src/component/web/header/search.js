import React, { Component } from 'react';
import { Input } from 'antd';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getArticleList } from '@/store/article/action'
import qs from 'querystring'

class Search extends Component {
    onSearch = (value) => {
        let { history, dispatchGetArticleList } = this.props
        dispatchGetArticleList({ keyword: value })
        history.push({
            pathname: '/article',
            search: 'keyword=' + value,
        })
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
    render() {
        return (
            <div className='search'>
                <Input.Search
                    placeholder="搜索文章"
                    onSearch={this.onSearch}
                    defaultValue={this.getKeyWord()}
                    style={{ width: '80%' }}
                />
            </div>
        )
    }
}
let mapDispatchToProps = dispatch => ({
    dispatchGetArticleList: params => dispatch(getArticleList(params))
})

export default withRouter(connect(null, mapDispatchToProps)(Search))