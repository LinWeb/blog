import React, { Component, Fragment } from 'react';
import {Modal, Menu, Dropdown, Avatar, Button } from 'antd';
import Register from '../register'
import LoginForm from '@/component/common/loginForm'
import UpdateUserInfo from '../updateUserInfo'
import { connect } from 'react-redux'
import { logout } from '@/store/user/action'
class UserHead extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loginShow: false,
            registerShow: false,
            updateUserInfoShow: false
        }
    }
    changeLoginModalShow = () => {
        this.setState((state) => ({
            loginShow: !state.loginShow
        }))
    }
    changeRegisterModalShow = () => {
        this.setState((state) => ({
            registerShow: !state.registerShow
        }))
    }
    changeUpdateUserInfoModalShow = () => {
        this.setState((state) => ({
            updateUserInfoShow: !state.updateUserInfoShow
        }))
    }
    logout = () => {
        let { dispatchLogout } = this.props
        dispatchLogout()
    }
    menu = () => (
        <Menu>
            <Menu.Item onClick={this.changeUpdateUserInfoModalShow}>
                修改用户信息
            </Menu.Item>
            <Menu.Item onClick={this.logout}>
                退出登录
            </Menu.Item>
        </Menu>
    )
    render() {
        let { loginShow, registerShow, updateUserInfoShow } = this.state
        let { userId, token, name, categoryColors } = this.props
        let avatarBgColor = categoryColors[(userId - 1) % 11]
        return (
            <div className='userHead'>
                {token ?
                    <Fragment>
                        <Dropdown overlay={this.menu}>
                            <Avatar size={43} style={{ backgroundColor: avatarBgColor, marginLeft: '60px' }} >
                                {name.substring(0, 1)}
                            </Avatar>
                        </Dropdown>
                        <UpdateUserInfo isShow={updateUserInfoShow} onCancel={this.changeUpdateUserInfoModalShow} />
                    </Fragment>
                    :
                    <Fragment>
                        <Button type="primary" ghost onClick={this.changeLoginModalShow} style={{ marginRight: '15px' }}>
                            登录
                        </Button>
                        <Button type="danger" ghost onClick={this.changeRegisterModalShow} >
                            注册
                        </Button>
                        <Modal
                            title="登录"
                            visible={loginShow}
                            onCancel={this.changeLoginModalShow}
                            width={334}
                            footer={null} 
                        > 
                            <LoginForm succeedCallback={this.changeLoginModalShow} />
                        </Modal>
                        <Register isShow={registerShow} onCancel={this.changeRegisterModalShow} />
                    </Fragment>
                }
            </div >
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