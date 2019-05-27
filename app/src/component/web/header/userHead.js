import React, { Component } from 'react';
import { Menu, Dropdown, Avatar, Modal, Button } from 'antd';
import Register from '../register'
import Login from '../login'
class UserHead extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loginShow: true,
            registerShow: false
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
    render() {
        const menu = (
            <Menu>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="#">
                        修改用户信息
                </a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="#">
                        退出登录
                </a>
                </Menu.Item>
            </Menu>
        );
        let { loginShow, registerShow } = this.state
        return (
            <div className='userHead'>
                {/* <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link" href="#">
                        <Avatar size={43} icon="user" />
                    </a>
                </Dropdown> */}
                <Button type="primary" ghost onClick={this.changeLoginModalShow} style={{ marginRight: '15px' }}>
                    登录
                </Button>
                <Button type="danger" ghost onClick={this.changeRegisterModalShow} >
                    注册
               </Button>
                <Login isShow={loginShow} onCancel={this.changeLoginModalShow} />
                <Register isShow={registerShow} onCancel={this.changeRegisterModalShow} />
            </div >
        )
    }
}

export default UserHead