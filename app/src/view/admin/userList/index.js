import React, { Component } from 'react';
import columns from './colums'
import Filter from './filter'
import { Table } from 'antd';
import { getUserList } from '@/store/user/action'
import { connect } from 'react-redux'

class UserList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            params: {}
        }
    }
    UNSAFE_componentWillMount() {
        this.getUsers({})
    }
    getUsers = (newParams) => {
        let { dispatchGetUserList } = this.props
        let params = { ...this.state.params, ...newParams }
        this.setState(() => ({
            params
        }))
        dispatchGetUserList(params)
    }
    onChange = (currentPage) => {
        this.getUsers({ currentPage })
    }
    render() {
        let { userList, pager } = this.props
        let { currentPage, pageSize, total } = pager
        return (
            <div className='user-list-container' style={{ padding: '12px 33px 45px' }}>
                <Filter getUsers={this.getUsers} />
                <Table rowKey="id"
                    bordered={true}
                    className='user-list'
                    columns={columns}
                    dataSource={userList}
                    pagination={{
                        current: currentPage,
                        pageSize,
                        total,
                        onChange: this.onChange
                    }}
                    locale={{
                        emptyText: '暂无数据'
                    }}
                />
            </div>
        )
    }
}
let mapStateToProps = state => {
    let { userList, pager } = state.user.userListData
    let { loading } = state.common
    return {
        userList,
        pager,
        loading
    }
}
let mapDispatchToProps = dispatch => ({
    dispatchGetUserList: params => dispatch(getUserList(params))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserList)