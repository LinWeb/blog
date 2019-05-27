import React, { Component } from 'react';
import { Menu, Dropdown, Avatar, Modal, Button } from 'antd';
import Register from '../register'
class UserHead extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loginShow: false, registerShow: true
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
                <Modal
                    title="Basic Modal"
                    visible={loginShow}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
                <Register isShow={registerShow} onCancel={this.changeRegisterModalShow} /> </div>
        )
    }
}

export default UserHead