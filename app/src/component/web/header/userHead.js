import React, { Component } from 'react';
import { Menu, Dropdown, Avatar } from 'antd';
class UserHead extends Component {
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
        return (
            <div className='userHead'>
                <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link" href="#">
                        <Avatar size={43} icon="user" />
                    </a>
                </Dropdown>
            </div>
        )
    }
}

export default UserHead