import React, { Component } from 'react';
import { Input } from 'antd';
import { connect } from 'react-redux'
import { getArticleList } from '@/store/article/action'

class Search extends Component {
    onSearch = (value) => {
        let { history, dispatchGetArticleList } = this.props
        dispatchGetArticleList({ keyword:value })
        // history.push({
        //     search: 'currentPage=' + currentPage
        // })
    }  
    render() {
        return (
            <div className='search'>
                <Input.Search
                    placeholder="搜索文章"
                    onSearch={this.onSearch}
                    style={{ width: '80%' }}
                />
            </div>
        )
    }
}
let mapDispatchToProps = dispatch => ({
    dispatchGetArticleList: params => dispatch(getArticleList(params))
})

export default connect(null, mapDispatchToProps)(Search)