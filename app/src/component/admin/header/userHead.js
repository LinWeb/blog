import React, { Component } from 'react';
import { Menu, Dropdown, Avatar } from 'antd';
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '@/store/user/action'
import headImg from '@/assets/images/bloger-head.jpg'

class UserHead extends Component {
    logout = async () => {
        let { dispatchLogout, history } = this.props
        await dispatchLogout()
        history.push('/admin/login')
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
        return (
            <Dropdown overlay={this.menu} trigger={['hover', 'click']}>
                <Avatar size={43} src={headImg} style={{ float: 'right' }} />
            </Dropdown>
        )
    }
}
let mapDispatchToProps = dispatch => ({
    dispatchLogout: () => dispatch(logout())
})
export default withRouter(connect(null, mapDispatchToProps)(UserHead))