import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
class Nav extends Component {
    render() {
        return (
            <div className='nav'>
                <Menu mode="horizontal" className='nav-ul'>
                    <Menu.Item key="home" className='item'>
                        <Icon type="home" />
                        首页
                    </Menu.Item>
                    <Menu.Item key="edit" className='item'>
                        <Icon type="edit" />
                        归档
                    </Menu.Item>
                    <Menu.Item key="bars" className='item'>
                        <Icon type="bars" />
                        分类
                    </Menu.Item>
                    <Menu.Item key="user" className='item'>
                        <Icon type="user" />
                        关于
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default Nav