import React, { Component, Fragment } from 'react';
import { Divider, Popconfirm } from 'antd';
import { connect } from 'react-redux'
import { delArticle } from '@/store/article/action'
import { Link } from 'react-router-dom'

class Operater extends Component {
    render() {
        let { id, dispatchDelArticle } = this.props
        return (
            <Fragment>
                <Link to={'/article/' + id}>查看</Link>
                <Divider type="vertical" />
                <Link to={'/admin/article/edit/' + id}>编辑</Link>
                <Divider type="vertical" />
                <Popconfirm onConfirm={() => { dispatchDelArticle({ id }) }} title="确认删除此文章？" okText="确定" cancelText="取消">
                    <span style={{ cursor: 'pointer', color: '#1890ff' }}>删除</span>
                </Popconfirm>
            </Fragment>
        )
    }
}
let mapDispatchToProps = dispatch => ({
    dispatchDelArticle: params => dispatch(delArticle(params))
})

export default connect(null, mapDispatchToProps)(Operater)