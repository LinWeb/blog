import React, { Component, Fragment } from 'react';
import { Menu, Dropdown, Avatar, Button } from 'antd';

class UserHead extends Component {
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
        return (
            <Dropdown overlay={this.menu} style={{}}>
                <Avatar size={43} style={{ backgroundColor: '#ddd', float: 'right' }} >
                    {'55'.substring(0, 1)}
                </Avatar>
            </Dropdown>
        )
    }
}

export default UserHead