import React, { Component, Fragment } from 'react';
import { Popconfirm } from 'antd';
import { connect } from 'react-redux'
import { delUser } from '@/store/user/action'

class Operater extends Component {
    render() {
        let { id, dispatchDelUser } = this.props
        return (
            <Fragment>
                <Popconfirm onConfirm={() => { dispatchDelUser({ id }) }} title="确认删除此用户？" okText="确定" cancelText="取消">
                    <span style={{ cursor: 'pointer', color: '#1890ff' }}>删除</span>
                </Popconfirm>
            </Fragment>
        )
    }
}
let mapDispatchToProps = dispatch => ({
    dispatchDelUser: params => dispatch(delUser(params))
})

export default connect(null, mapDispatchToProps)(Operater)