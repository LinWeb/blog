import React, { Component, Fragment } from 'react';
import { Modal, Menu, Dropdown, Avatar, Icon } from 'antd';
import Register from '../register'
import LoginForm from '@/component/common/loginForm'
import UpdateUserInfo from '../updateUserInfo'
import { connect } from 'react-redux'
import { logout } from '@/store/user/action'
import headImg from '@/assets/images/bloger-head.jpg'

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
    userMenu = () => (
        <Menu>
            <Menu.Item onClick={this.changeUpdateUserInfoModalShow}>
                修改用户信息
            </Menu.Item>
            <Menu.Item onClick={this.logout}>
                退出登录
            </Menu.Item>
        </Menu>
    )
    loginRegisterMenu = () => (
        <Menu>
            <Menu.Item onClick={this.changeLoginModalShow}>
                用户登录
            </Menu.Item>
            <Menu.Item onClick={this.changeRegisterModalShow}>
                用户注册
            </Menu.Item>
        </Menu>
    )
    render() {
        let { loginShow, registerShow, updateUserInfoShow } = this.state
        let { userId, token, name, auth, categoryColors } = this.props
        let avatarBgColor = categoryColors[(userId - 1) % 11]
        return (
            <div className='userHead'>
                {token ?
                    <Fragment>
                        <Dropdown overlay={this.userMenu} trigger={['hover', 'click']}>
                            {auth ?
                                <Avatar size={43} src={headImg} style={{ marginLeft: '40px' }} />
                                : <Avatar size={43} style={{ backgroundColor: avatarBgColor, marginLeft: '40px' }} >
                                    {name.substring(0, 1)}
                                </Avatar>
                            }
                        </Dropdown>
                        <UpdateUserInfo isShow={updateUserInfoShow} onCancel={this.changeUpdateUserInfoModalShow} />
                    </Fragment>
                    :
                    <Fragment>
                        <Dropdown overlay={this.loginRegisterMenu} trigger={['hover', 'click']}>
                            <Avatar size={43} style={{ marginLeft: '40px' }} >
                                <Icon type="user" />
                            </Avatar>
                        </Dropdown>

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
    let { userId, token, name, auth } = state.user
    let { categoryColors } = state.category
    return {
        userId, token, name, auth, categoryColors
    }
}
let mapDispatchToProps = dispatch => ({
    dispatchLogout: () => dispatch(logout())
})
export default connect(mapStateToProps, mapDispatchToProps)(UserHead)