import React, { Component, Fragment } from 'react';
import { Menu, Dropdown, Avatar, Button } from 'antd';
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '@/store/user/action'
class UserHead extends Component {
    logout = () => {
        let { dispatchLogout } = this.props
        dispatchLogout()
    }
    menu = () => (
        <Menu>
            <Menu.Item onClick={this.goHome}>
                <Link to='/'>
                    返回主页
                </Link>
            </Menu.Item>
            <Menu.Item onClick={this.logout}>
                退出登录
            </Menu.Item>
        </Menu>
    )
    render() {
        let { userId, name, categoryColors } = this.props
        let avatarBgColor = categoryColors[(userId - 1) % 11]
        return (
            <Dropdown overlay={this.menu} style={{}}>
                <Avatar size={43} style={{ backgroundColor: avatarBgColor, float: 'right' }} >
                    {name.substring(0, 1)}
                </Avatar>
            </Dropdown>
        )
    }
}
let mapStateToProps = state => {
    let { userId, token, name } = state.user
    let { categoryColors } = state.category
    return {
        userId, token, name, categoryColors
    }
}
let mapDispatchToProps = dispatch => ({
    dispatchLogout: () => dispatch(logout())
})
export default connect(mapStateToProps, mapDispatchToProps)(UserHead)